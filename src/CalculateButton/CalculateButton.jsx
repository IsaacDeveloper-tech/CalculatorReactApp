import React from "react";
import "./CalculateButton.css";

//custom hooks
import { useCalculateOperation } from "../CustomHooks/useCalculateOperation/useCalculateOperation";


function CalculateButton({ operation, SetStateOperation, LastInputIsANumber, InputHasASimbol }){

    const [
        AvailableToCalculate,
        GetFirstNumber,
        GetSecondNumber,
        GetSimbol,
        CalculateOperation
    ] = useCalculateOperation(LastInputIsANumber, InputHasASimbol);

    const OnClick = () => {
        let firstNumber = 0;
        let secondNumber = 0;
        let operator = "";
        let result = 0;

        if(AvailableToCalculate(operation)){
            firstNumber = GetFirstNumber(operation);
            secondNumber = GetSecondNumber(operation);
            operator = GetSimbol(operation);

            result = CalculateOperation(firstNumber, secondNumber, operator);

            SetStateOperation(result.toString());
        }

    }

    return (
        <button onClick={ OnClick } className="calculate-button">=</button>
    );
}

export { CalculateButton };