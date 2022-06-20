

function useCalculateOperation(LastInputIsANumber, InputHasASimbol) {
    const AvailableToCalculate = operation => {
        return LastInputIsANumber(operation) && InputHasASimbol(operation);
    }

    const GetSimbol = operation =>{
        if(operation.includes("+")){
            return "+";
        } else if (operation.includes("-")) {
            return "-";
        } else if (operation.includes("/")) {
            return "/";
        } else {
            return "*";
        }
    }

    const GetFirstNumber = operation => {
        let simbol = GetSimbol(operation);
        let simbolFound = false;
        let firstNumber = "";
        let i = 0

        while (i < operation.length && !simbolFound) {
            if(operation[i] !== simbol){
                firstNumber += operation[i];
            } else {
                simbolFound = true;
            }
            i++;
        }

        return parseInt(firstNumber);
    }

    const GetSecondNumber = operation => {
        let simbol = GetSimbol(operation);
        let simbolFound = false;
        let firstNumber = "";

        for( let i = 0; i < operation.length; i++ ){
            if(simbolFound){
                firstNumber += operation[i];
            }
            
            if(operation[i] === simbol){
                simbolFound = true;
            }
        }

        return parseInt(firstNumber);
    }

    const CalculateOperation = (firstNumber, secondNumber, operator) => {
        let result = 0;

        switch(operator){
            case "+":
                result = firstNumber + secondNumber;
                break;
            case "-":
                result = firstNumber - secondNumber;
                break;
            case "*":
                result = firstNumber * secondNumber;
                break;
            case "/":
                result = firstNumber / secondNumber;
                break;
                default:
                    console.error("invalid operator");
        }
        
        return result;
    }

    //custom hooks return
    return [
        AvailableToCalculate,
        GetFirstNumber,
        GetSecondNumber,
        GetSimbol,
        CalculateOperation
    ];
}

export { useCalculateOperation };