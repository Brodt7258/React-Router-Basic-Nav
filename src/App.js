import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route, Switch } from 'react-router-dom';

const App = () => (
  <div>
    <Navigation />
    <Switch>
      <Route component={Home} path="/" exact />
      <Route component={About} path="/about" exact />
      <Route component={Contact} path="/contact" exact />
    </Switch>
  </div>
);

export default App;
