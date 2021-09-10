import './App.css';
import Swapi from './components/faff/Swapi';
import Footer from './components/Footer';
import Header from './components/Header';
import Person from './components/props/Person';

const App = () => {

  return (
    <div className="App">
      <Header/>
      <Person name="Jordan" age={27} jobTitle="Herder of cats"/>
      <Person name="Seb" age={24} jobTitle="Peddler of conspiracies"/>
      <Person/>
      <Footer/>
    </div>
  );
}

export default App;
