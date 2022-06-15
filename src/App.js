import './App.css';

//components
import { DeleteButton } from './DeleteButton/DeleteButton';
import { CalculateButton } from './CalculateButton/CalculateButton';
import { SimbolButton } from './SimbolButton/SimbolButton';
import { NumberButton } from './NumberButton/NumberButton';
import { Screen } from './Screen/Screen';

function App() {

  //functions
  const SetNumberButtons = maxButtons =>{
    let buttons = [];

    for(let i = maxButtons - 1; i >= 0; i--){
      buttons.push(
        <NumberButton number={i} />
      );
    }

    return buttons;
  }

  return (
    <div className="App">
      
      <Screen />

      <div className='buttons-box'>

        <div>
          <div className='buttons-number'>
            { SetNumberButtons(10) }
          </div>
          <div className='buttons-simbol'>
            <SimbolButton simbol={ "+" } />
            <SimbolButton simbol={ "-" } />
            <SimbolButton simbol={ "x" } />
            <SimbolButton simbol={ "/" } />
          </div>
        </div>

        <div>
          <CalculateButton />
          <DeleteButton />
        </div>
      </div>

    </div>
  );
}

export default App;
