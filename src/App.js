import logo from './logo.svg';
import './App.css';
import Button from "./Component/Button/Button"
import Increment from "./Component/Button/Increment"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button label="Click me please"></Button>
        <Increment></Increment>
      </header>
    </div>
  );
}

export default App;
