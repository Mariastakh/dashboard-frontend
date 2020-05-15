import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import "./global.css";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import DashboardPage from "./Pages/DashboardPage";
import TasksPage from "./Pages/TasksPage";
import SportsPage from "./Pages/SportsPage";
import NewsPage from "./Pages/NewsPage";
import PhotoPage from "./Pages/PhotoPage";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    
      user: localStorage.getItem("user") || "No user",
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(data) {
  
    localStorage.setItem("user", data.user.username);
    console.log(this.state.user);
  }

  render() {
    return (
      <main>
        <Router>
          <Route
            exact
            path="/"
            render={(props) => (
              <LoginPage
                {...props}
                handleLogin={this.handleLogin}
               
              />
            )}
          />
          <Route
            exact
            path="/signup"
            render={(props) => <SignUpPage {...props} />}
          />
          <Route
            path="/dashboard"
            exact
            render={(props) => (
              <DashboardPage {...props} user={this.state.user} />
            )}
          />
          <Route path="/tasks" exact component={TasksPage} />
          <Route path="/sports" exact component={SportsPage} />
          <Route path="/news" exact component={NewsPage} />
          <Route path="/photos" exact component={PhotoPage} />
        </Router>
      </main>
    );
  }
}
