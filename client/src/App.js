import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Home from './Pages/Home'
import Admin from './Pages/Admin';
import Login from './Pages/Login'
import NewBlog from './Pages/NewBlog';
import api from "./utils/api";

class App extends Component {
  state= {
    loggedIn: false,
    username: '', 
    email: ''
  }

  componentWillMount = async () => {
    this.checkLogin();
  };

  checkLogin = () => {
    api.checkLogin().then(user => {
      if (user.data !== false) {
        api.findUserById(user.data).then(data => {
          this.setState({
            loggedIn: true,
            username: data.data.username,
            email: data.data.email,
          });
        });
      } else {
        this.setState({
          loggedIn: false,
        });
      }
    });
  };



  logout = () => {
    api.logout().then(() => {
      // reload the window on sucessful logout
      window.location.reload();
    });
  }

  render () {
    const {loggedIn} = this.state;
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Home} />
          
            <Route exact path="/admin" render={() =>
                  loggedIn === true ? <Admin logout={this.logout} username={this.state.username}/> : <Login />
                }
              />
            <Route exact path="/admin/blog/:id" render={() =>
                  loggedIn === true ? <NewBlog logout={this.logout} username={this.state.username}/> : <Login /> 
                }
              />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
export default App;
