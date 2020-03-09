import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import Nav from "./Nav"; 


import React from 'react';

import './App.css';

function App() {  
  return (
  <Router>
    <Nav /> 
    <Switch>
      <Articles />
    </Switch>
  </Router>
  );  
  }

  const Home = () => (
    <div>
      <h1>My first homepage on React</h1>
    </div>
  ); 

// export our component
export default App;
