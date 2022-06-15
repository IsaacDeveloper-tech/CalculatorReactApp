import React from "react";

function NumberButton ({ number }) {
    return(
        <button className="number-button">{number}</button>
    );
}

export { NumberButton };