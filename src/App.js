import './App.css';
import React from 'react';

//components
import { DeleteButton } from './DeleteButton/DeleteButton';
import { CalculateButton } from './CalculateButton/CalculateButton';
import { SimbolButton } from './SimbolButton/SimbolButton';
import { NumberButton } from './NumberButton/NumberButton';
import { Screen } from './Screen/Screen';

//Custom Hooks
import { useInputOperation } from './CustomHooks/useInputOperation/useInputOperation';

function App() {

  const [
    operation,
    SetStateOperation,
    OnScreenChange,
    IsCorrectInput,
    LastInputIsANumber,
    InputHasASimbol
  ] = useInputOperation();

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
            <SimbolButton simbol={ "*" } IsCorrectInput = { IsCorrectInput } SetStateOperation = { SetStateOperation } operation = { operation }/>
            <SimbolButton simbol={ "/" } IsCorrectInput = { IsCorrectInput } SetStateOperation = { SetStateOperation } operation = { operation }/>
          </div>
        </div>

        <div className='buttons-actions'>
          <CalculateButton 
            operation={ operation }
            SetStateOperation = { SetStateOperation }
            LastInputIsANumber = { LastInputIsANumber }
            InputHasASimbol = { InputHasASimbol } 
          />
          <DeleteButton SetStateOperation = { SetStateOperation } />
        </div>
      </div>

    </div>
  );
}

export default App;
