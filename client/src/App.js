import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Admin from "./Pages/Admin";
import Login from "./Pages/Login";
import NewBlog from "./Pages/NewBlog";
import api from "./utils/api";
import { PromiseProvider } from "mongoose";
import Images from "./Pages/Images";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [search, setSearch] = useState("");
  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = () => {
    api.checkLogin().then(user => {
      console.log(user);
      if (user.data !== false) {
        //need to make id here?
        console.log(user.data);
        api.findUserById(user.data).then(data => {
          setLoggedIn(true);
          setUsername(data.data.username);
          setEmail(data.data.email);
          console.log(data.data.admin);
          if (data.data.admin === true) {
            setAdmin(true);
          } else {
            setAdmin(false);
          }
        });
      } else {
        setLoggedIn(false);
      }
    });
  };

  const logout = () => {
    api.logout().then(() => {
      // reload the window on sucessful logout
      window.location.reload();
    });
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              loggedIn === true && admin === true ? (
                <Admin logout={logout} username={username} />
              ) : (
                <Login />
              )
            }
          />
          <Route
            exact
            path="/images"
            render={() =>
              loggedIn === true && admin === true ? (
                <Images logout={logout} username={username} />
              ) : (
                <Login />
              )
            }
          />
          <Route
            exact
            path="/blog/:id"
            render={() =>
              loggedIn === true && admin === true ? (
                <NewBlog logout={logout} username={username} />
              ) : (
                <Login />
              )
            }
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default App;
