import './App.css';
import Counter from './components/hooks/Counter';
import ProductManager from './components/lifting-state/solutions/ProductManager';

const App = () => {

  return (
    <div className="App">
      <ProductManager/>
    </div>
  );
}

export default App;
