import React, {useState} from 'react';
import './App.css';
import Tabs from './components/Tabs';


function App() {

  const list = 
  [
    'Tab 1 Contents.',
    'Tab 2 Contents.', 
    'This was so much easier than Box Generation.This was so much easier than Box Generation. This was so much easier than Box Generation.This was so much easier than Box Generation. This was so much easier than Box Generation.This was so much easier than Box Generation. This was so much easier than Box Generation.This was so much easier than Box Generation. This was so much easier than Box Generation.This was so much easier than Box Generation. '
  ]
  return (
    <div className="App">
      <Tabs contentList = {list}/>
    </div>
  );
}

export default App;
