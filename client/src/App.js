import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer } from "./Components";
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
          <Route path="/GitCommits" component={() => <GitCommits />} />
            <Navigation />
            <Footer />
        </Router>
        
      </div>
    );
  }
}

export default App;
