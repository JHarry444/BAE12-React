import './App.css';
import Counter from './components/state/Counter';

const App = () => {

  return (
    <div className="App">
      <p>APP: {new Date().toTimeString()}</p>
      <Counter/>
    </div>
  );
}

export default App;
