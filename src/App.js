import './App.css';
import Button1 from './components/Button1';
import Button2 from './components/Button2';
import Class from './components/Class-Component';
import Greet from './components/props';

function App() {
  return (
    <div className="App">
      <h1>hello</h1>
      <Button1/>
      <Button1/>
      <Button2/>
      <Class name="Keeru" loc="kalikiri"/>
      <Greet name="bhav" loc="Banglore">
        <p>This is children tag</p>
      </Greet>
      <Greet name="lav" loc="Chennai">
        <button>Click</button>
      </Greet>
    </div>
  );
}

export default App;
