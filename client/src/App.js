import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin/Admin";
import Login from "./Pages/Admin/Login";
import NewBlog from "./Pages/Admin/NewBlog";
import BlogPage from "./Pages/BlogPage";
import Blogs from "./Pages/Blogs";
import Freebies from "./Pages/Freebies";
import Contact from "./Pages/Contact";
import Meet from "./Pages/Meet";
import api from "./utils/api";
import FreebiesReg from "./Pages/FreebiesRegister";
import { PromiseProvider } from "mongoose";

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
          <Route path="/" exact component={Home} />
          <Route
            path="/my-blog"
            exact
            render={() => <Blogs category={undefined} />}
          />
          <Route
            path="/reading"
            exact
            render={() => <Blogs category="reading" />}
          />
          <Route
            path="/writing"
            exact
            render={() => <Blogs category="writing" />}
          />
          <Route path="/math" exact render={() => <Blogs category="math" />} />
          <Route
            path="/holidays"
            exact
            render={() => <Blogs category="holidays" />}
          />
          <Route
            path="/classroom"
            exact
            render={() => <Blogs category="ideas" />}
          />
          {/* sending loggedIn to freebies, because its both the login page and content */}
          <Route
            path="/teacher-freebies"
            exact
            render={() => <FreebiesReg loggedIn={loggedIn} logout={logout} />}
          />
          <Route
            path="/my-freebies"
            exact
            render={() => <Freebies loggedIn={loggedIn} logout={logout} />}
          />
          <Route path="/contact-me" exact component={Contact} />
          <Route path="/meet-jenn" exact component={Meet} />
          <Route path="/blog/:id" exact component={BlogPage} />
          <Route
            exact
            path="/admin"
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
            path="/admin/blog/:id"
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
