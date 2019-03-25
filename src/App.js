import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Button from '@material-ui/core/Button';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Button variant="contained" color="primary">
              Hello World
            </Button>
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
