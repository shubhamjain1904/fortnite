import React from 'react';
import './App.css';
import About from './About.js';
import Shop from './Shop.js';
import Nav from './Nav.js';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Item from './itemDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" exact component={About} />
          <Route path="/Shop" exact component={Shop} />
          <Route path="/Shop/:id" component={Item} />
        </Switch>
      </div>
    </Router>
  );
}

const Home =()=>(
  <div>
    <h1>Home Page</h1>

  </div>
);

export default App;
