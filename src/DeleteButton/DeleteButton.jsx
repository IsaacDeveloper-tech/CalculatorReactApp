import React from "react";
import "./DeleteButton.css";

function DeleteButton({ SetStateOperation }) {
    return (
        <button onClick={ () => SetStateOperation("") } className="delete-button">CE</button>
    );
}


export { DeleteButton };