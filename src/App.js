import logo from './logo.svg';
import './App.css';
import Counter from './counter/counter';

function App() {
  return (
    <div className="App">
      <h1>Exo 03 - Compteur</h1>

      <Counter incr={2} />
    </div>
  );
}

export default App;
