import React, { useState, useEffect } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Home from './Pages/Home'
import Admin from './Pages/Admin/Admin';
import Login from './Pages/Admin/Login'
import NewBlog from './Pages/Admin/NewBlog';
import BlogPage from './Pages/BlogPage';
import api from "./utils/api";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    checkLogin()
  }, [])
  

  const checkLogin = () => {
    api.checkLogin().then(user => {
      if (user.data !== false) {
        api.findUserById(user.data).then(data => {
          setLoggedIn(true)
          setUsername(data.data.username)
          setEmail(data.data.email)
        });
      } else {
        setLoggedIn(false)
      }
    });
  };

  const logout = () => {
    api.logout().then(() => {
      // reload the window on sucessful logout
      window.location.reload();
    });
  }

    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/blog/:id" exact component={BlogPage} />
            <Route exact path="/admin" render={() =>
                  loggedIn === true ? <Admin logout={logout} username={username}/> : <Login />
                }
              />
            <Route exact path="/admin/blog/:id" render={() =>
                  loggedIn === true ? <NewBlog logout={logout} username={username}/> : <Login /> 
                }
              />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
export default App;
