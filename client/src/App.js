import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './Pages/Home'
class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" exact component={Home} />
        </div>
      </BrowserRouter>
    )
  }
}
export default App;
