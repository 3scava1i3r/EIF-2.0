import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



import Header from '../src/components/header'
import Login from '../src/screens/Login'
import Swap from '../src/screens/swap'
import Transfer from '../src/screens/transfer'
import Home from '../src/screens/Home'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/transfer">
            <Header />
            <Transfer />
            
          </Route>
          <Route path="/swap">
            <Header />
            <Swap />
            
          </Route>
          <Route path="/login">
            <Login />
            <h1>login</h1>
          </Route>
          <Route path="/">
            <Header />
            <Home />
            
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
