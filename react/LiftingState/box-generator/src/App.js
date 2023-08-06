
import React, { useState } from 'react'
import './App.css';
import BoxGenerator from './components/BoxGenerator';
import BoxGeneratorDisplay from './components/BoxGeneratorDisplay';
// import MessageForm from './components/MessageForm';
// import MessageDisplay from './components/MessageDisplay';


function App() {
  //    [getter, setter]
  const [box, setBox] = useState([])
  const receiveNewBox = (newBox) =>{
    setBox((prevState) => [...prevState, newBox])
  }
  return (
    <div className="App">
      {/* here passing in hook into BoxGenerator */}
      <BoxGenerator onCreate = {receiveNewBox} />
      {/* passing in the array of objects as box info */}
      <BoxGeneratorDisplay boxInfo = {box} />
    </div>
  );
}

export default App;
