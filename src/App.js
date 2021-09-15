/* eslint-disable react/jsx-filename-extension */
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import About from './components/routing/About';
import DisplayParameter from './components/routing/DisplayParemeter';
import Home from './components/routing/Home';

const App = () => (
  <Router>
    <nav>
      <Link to="/">
        Home
      </Link>
      {' '}
      <Link to="/about">
        About
      </Link>
      {' '}
      <Link to="/parameters">
        Parameters Example
      </Link>
    </nav>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/parameters/:myParameter">
      <DisplayParameter />
    </Route>
  </Router>
);
export default App;
