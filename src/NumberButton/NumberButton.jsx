import React from "react";
import "./NumberButton.css";

function NumberButton ({ number }) {
    return(
        <button className="number-button">{number}</button>
    );
}

export { NumberButton };