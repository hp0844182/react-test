import React from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import Header from './components/header'
import Render from './pages/render'

import './App.css';

function App() {
  return (
    <Router>
    <Header/>
      <Switch>
        <Route path="/render" component={Render}></Route>
      </Switch>
    </Router>
  );
}

export default App;
