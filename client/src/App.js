import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Admin from './Pages/Admin';
import NewBlog from './Pages/NewBlog';
class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" exact component={Home} />
          <Route path="/admin" exact component={Admin} />
          <Route path="/admin/newblog" exact component={NewBlog} />
        </div>
      </BrowserRouter>
    )
  }
}
export default App;
