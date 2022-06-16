import React from "react";
import "./SimbolButton.css";

function SimbolButton({ simbol }) {
    return (
        <button className="simbol-button">{ simbol }</button>
    );
}

export { SimbolButton };