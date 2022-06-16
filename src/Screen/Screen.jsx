import React from "react";
import "./Screen.css";


function Screen({ OnScreenChange, operation }){
    return (
        <input value={ operation } onChange={ OnScreenChange } className="screen" type="text" />
    );
}


export { Screen };