import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router';

const Home = (props) =>{
  return(
    <div>
      <h1 style={{color: "black"}}>Welcome</h1>
    </div>
  );
}

const Input = (props) =>{
  const { input } = useParams();
  if (isNaN(input)){
    return (
      <h1>The word is: {input}</h1>
    ) 
  } else{
    return (
      <h1>The number is: {input}</h1>
    )
  }
}



const ColorAndBackground = (props) =>{
  const {word, color, backgroundColor} = useParams();
  return(
    <div style={{backgroundColor: backgroundColor}}>
      <h1 style={{color: color}}>The word is: {word}</h1>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/:input" element={<Input />}/>
        <Route path="/:word/:color/:backgroundColor" element={<ColorAndBackground />}/>
      </Routes>

    </div>
  );
}

export default App;
