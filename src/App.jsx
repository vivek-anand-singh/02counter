import './App.css'
import {useState} from 'react';  

function App() {
  const [counter,setCounter] = useState(15);

  const addValue = () => {
    setCounter(counter+1);
  }
  const removeValue = () => {
    setCounter(counter-1);
  }
  return (
    <>
     <h1>Hello World</h1>
     <h2>Counter Value : {counter}</h2>

     <button onClick={addValue}>Add </button>
     <br/>
      <button onClick={removeValue}>Subtract </button>
    </>
  )
}

export default App
