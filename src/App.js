import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import {history,routes} from "./config/routes"
import {Header} from "./components/Header"

import './App.css';

function App() {  
  return (
   <div className="App"  >
      <Header/>
    <Router history={history}>
      <Switch>
        {Object.keys(routes).map((key)=>{
          const value=routes[key];
          return <Route {...value} key={key}/>
        })}
      </Switch>
    </Router>
   </div>
    
  );
}

export default App;
