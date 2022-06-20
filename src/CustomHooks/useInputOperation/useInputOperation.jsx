import React from "react";

function useInputOperation() {
    //state operation
    const [operation, SetStateOperation] = React.useState("");

    //functions
    const LastInputIsANumber = input => {
    let number = parseInt(input[input.length - 1]);

    return number >= 0 && number < 10;
    }

    const LastInputIsASimbol = input => {
    let lastInput = input[input.length - 1];

    return lastInput === "+" || lastInput === "-" || lastInput === "/" || lastInput === "*";
    }

    const InputHasASimbol = input => {
    let hasASimbol = false;

    hasASimbol = LastInputIsASimbol(input[0]);

    for(let i = 0; i < input.length - 1; i++){
        if(LastInputIsASimbol(input[i])){
        hasASimbol = true;
        }
    }

    return hasASimbol;
    }

    const IsCorrectInput = input => {

    let isCorrect = false;

    if(LastInputIsANumber(input)){
        isCorrect = true;
    } else if(LastInputIsASimbol(input)) {
        if(!InputHasASimbol(input)){
        isCorrect = true;
        }
    }

    return isCorrect;
    }

    const OnScreenChange = (event) => {
    let data = "";
    data = event.target.value;

    if(IsCorrectInput(data)){
        SetStateOperation(data);
    }
    }

    //CustomHook return
    return [
        operation,
        SetStateOperation,
        OnScreenChange,
        IsCorrectInput,
        LastInputIsANumber,
        InputHasASimbol
    ];
}


export { useInputOperation };