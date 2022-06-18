import React from "react";
import "./SimbolButton.css";

function SimbolButton({ simbol, SetStateOperation, operation, IsCorrectInput }) {

    const OnClick = ()=>{
        let newOperation = operation + simbol;

        if(IsCorrectInput(newOperation)){
            SetStateOperation(newOperation);
        }
        
    }

    return (
        <button className="simbol-button" onClick={ OnClick }>{ simbol }</button>
    );
}

export { SimbolButton };