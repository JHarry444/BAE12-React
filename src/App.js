import './App.css';
import Counter from './components/state/Counter';
import KingContainer from './components/state/KingContainer';

const App = () => {

  return (
    <div className="App">
      <p>APP: {new Date().toTimeString()}</p>
      <KingContainer/>
    </div>
  );
}

export default App;
