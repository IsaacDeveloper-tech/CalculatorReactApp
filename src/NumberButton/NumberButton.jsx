import React from "react";
import "./NumberButton.css";

function NumberButton ({ number, SetStateOperation, operation }) {

    const OnClick = () => {
        let newOperation = operation + number;

        SetStateOperation(newOperation);
    }

    return(
        <button className="number-button" onClick={ OnClick }>{number}</button>
    );
}

export { NumberButton };