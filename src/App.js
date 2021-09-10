import './App.css';
import Swapi from './components/faff/Swapi';
import Footer from './components/Footer';
import Header from './components/Header';
import King from './components/King';
import MyComponent from './components/props/MyComponent';
import Person from './components/props/Person';

const App = () => {

  return (
    <div className="App">
      {/* <Header/>
      <Person name="Jordan" age={27} jobTitle="Herder of cats"/>
      <Person name="Seb" age={24} jobTitle="Peddler of conspiracies"/>
      <Person/>
      <Footer/> */}
      {/* <MyComponent/> */}
      <King nm="Barry" ctry="Coventry" yrs="1066" hse="straw"/>
      <King nm="Ryan" ctry="devon" yrs="1999-2021" hse="Donaghue"/>
    </div>
  );
}

export default App;
