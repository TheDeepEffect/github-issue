import React from 'react';
import { useSelector } from 'react-redux'
import { Router, Route, Switch } from 'react-router-dom';

import {history,routes} from "./config/routes"

import './App.css';

function App() {  
  return (
    <Router history={history}>
      <Switch>
        {Object.keys(routes).map((key)=>{
          const value=routes[key];
          return <Route {...value} key={key}/>
        })}
      </Switch>
    </Router>
    
  );
}

export default App;
