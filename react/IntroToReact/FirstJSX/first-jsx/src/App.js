import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import Container from "react-bootstrap/Container";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{fontSize:80}}>Hello Dojo!</h1>
        <h2 style={{fontSize:50,margin: "0 0 50px 0",}}>Things I need to do:</h2>
        <ul>
          <li>Learn React</li>
          <li>Climb Mt. Everest</li>
          <li>Run a marathon</li>
          <li>Feed the dogs</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
