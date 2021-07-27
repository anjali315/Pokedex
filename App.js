// import React, {component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { render } from '@testing-library/react';
import NavBar from './components/layout/NavBar';
import Dashboard from './components/layout/Dashboard';
import Pokemon from './components/pokemon/Pokemon';
import { Component } from 'react';

function App() {
    return (
      <Router>
        <div className="App">
          <NavBar/>
          <div className="container">
            <switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
            </switch>
            
          </div>
        </div>
      </Router>
    );
    
  
}

export default App;
