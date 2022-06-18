import './App.css';
import React from 'react';

//components
import { DeleteButton } from './DeleteButton/DeleteButton';
import { CalculateButton } from './CalculateButton/CalculateButton';
import { SimbolButton } from './SimbolButton/SimbolButton';
import { NumberButton } from './NumberButton/NumberButton';
import { Screen } from './Screen/Screen';

function App() {

  //state operation
  const [operation, SetStateOperation] = React.useState("");

  //functions
  const LastInputIsANumber = input => {
    let number = parseInt(input[input.length - 1]);

    return number >= 0 && number < 10;
  }

  const LastInputIsASimbol = input => {
    let lastInput = input[input.length - 1];

    return lastInput === "+" || lastInput === "-" || lastInput === "/" || lastInput === "x";
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

  const SetNumberButtons = maxButtons =>{
    let buttons = [];

    for(let i = maxButtons - 1; i >= 0; i--){
      buttons.push(
        <NumberButton 
          key={i} 
          number={i} 
          SetStateOperation = { SetStateOperation }
          operation = { operation }
        />
      );
    }

    return buttons;
  }

  return (
    <div className="App">
      
      <Screen 
        operation = {operation} 
        OnScreenChange = { OnScreenChange } 
      />

      <div className='buttons-box'>

        <div className='number-simbol-box'>
          <div className='buttons-number'>
            { SetNumberButtons(10) }
          </div>
          <div className='buttons-simbol'>
            <SimbolButton simbol={ "+" } IsCorrectInput = { IsCorrectInput } SetStateOperation = { SetStateOperation } operation = { operation }/>
            <SimbolButton simbol={ "-" } IsCorrectInput = { IsCorrectInput } SetStateOperation = { SetStateOperation } operation = { operation }/>
            <SimbolButton simbol={ "x" } IsCorrectInput = { IsCorrectInput } SetStateOperation = { SetStateOperation } operation = { operation }/>
            <SimbolButton simbol={ "/" } IsCorrectInput = { IsCorrectInput } SetStateOperation = { SetStateOperation } operation = { operation }/>
          </div>
        </div>

        <div className='buttons-actions'>
          <CalculateButton />
          <DeleteButton SetStateOperation = { SetStateOperation } />
        </div>
      </div>

    </div>
  );
}

export default App;
