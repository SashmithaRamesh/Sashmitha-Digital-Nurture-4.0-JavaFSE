import React, { useState } from 'react';
import CurrencyConverter from './CurrencyConverter';
import './App.css';  
const App = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const sayHello = () => alert('Hello! Static Message');
  const sayWelcome = (message) => alert(message);
  const handleClick = (event) => alert('I was clicked');
  const handleIncrement = () => {
    increment();
    sayHello();
  };
  return (
    <div className="container"> 
      <h1>React Event Handling</h1>
      <h2>Counter: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <br />
      <button onClick={() => sayWelcome('Welcome!')}>Say Welcome</button>
      <br />
      <button onClick={handleClick}>OnPress</button>
      <br />
      <CurrencyConverter />
    </div>
  );
};
export default App;