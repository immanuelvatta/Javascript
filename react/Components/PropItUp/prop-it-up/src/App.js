import React from 'react';
import './App.css';

// import PersonCard from './components/PersonCard';
import PersonCardFunctional from './components/PersonCardFunctional';

function App() {
  return (
    <div className="App">
      <div className='App-Header'>
        <PersonCardFunctional firstName={'Jane'} lastName={'Doe'} age={45} hairColor={'Black'} />
        <PersonCardFunctional firstName={'John'} lastName={'Smith'} age={88} hairColor={'Brown'} />
        <PersonCardFunctional firstName={'Millard'} lastName={'Fillmore'} age={50} hairColor={'Brown'} />
        <PersonCardFunctional firstName={'Maria'} lastName={'Smith'} age={62} hairColor={'Brown'} />
      </div>

    </div>
  );
}

export default App;
