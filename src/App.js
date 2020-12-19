import logo from "./logo.svg";
import "./App.css";

const names = ["Kevin", "Kamil", "Mohammed"];

function App() {
  return (
    <div className="App">
      <div>
        <h2>Names</h2>
        <ul className="names">
          {names.map((name) => (
            <li className="name">{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
