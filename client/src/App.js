import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Home } from "./Components";
import GitCommits from './Components/GitCommits';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    
  }
  
  
  render() {
    
    return (
      <div>

        <Router>
          
            <Navigation />
            <Switch>
              <Route path="/" exact component={() => <Home />} />
              <Route path="/Home" component={() => <Home />} />
              <Route path="/GitCommits" component={() => <GitCommits />} />
            </Switch>
            
        </Router>
        
      </div>
    );
  }
}

export default App;
