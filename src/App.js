import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import Articles from "./Articles"; 
import Article from "./Article"; 
import Nav from "./Nav"; 


import React from 'react';

import './App.css';

function App() {  
  
  return (
    <Router>
      <Nav /> 
      <Switch>
        <Route exact path="/articles/:id" render={(props) => <Article id={props.match.params.id} />} />
        <Route exact path="/articles">
          <Articles />
        </Route>
      </Switch>
    </Router>
    );  
  }

// export our component
export default App;
