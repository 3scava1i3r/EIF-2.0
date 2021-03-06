import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



import Header from '../src/components/header'
import Login from '../src/screens/Login'
import Swap from '../src/screens/swap'
import Transfer from '../src/screens/transfer'
import Home from '../src/screens/Home'
import CreateRFT from '../src/screens/createRFT'
import Market from '../src/screens/Market'



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
          <Route path="/create">
            <Header />
            <CreateRFT />
          </Route>
          <Route path="/login">
            <Login />
            <h1>login</h1>
          </Route>

          <Route path="/market">
            <Header />
            <Market />
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
