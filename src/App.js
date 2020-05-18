import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
      team: localStorage.getItem("teamdata") || "Choose a team",
      user: localStorage.getItem("user") || "No user",
      tasks: localStorage.getItem("tasks") || "no tasks",
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleTeam = this.handleTeam.bind(this);
  }

  handleLogin(data) {
    localStorage.setItem("user", data.user.username);
    console.log(this.state.user);
  }

  handleTeam(data) {
    console.log("team handled");
    console.log(data);
    localStorage.setItem("teamdata", data);
  }

  render() {
    return (
      <main>
        <Router>
          <Route
            exact
            path="/"
            render={(props) => (
              <LoginPage {...props} handleLogin={this.handleLogin} />
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
              <DashboardPage
                {...props}
                loggedInStatus={this.state.loggedInStatus}
                team={this.state.team}
                user={this.state.user}
                tasks={this.state.tasks}
              />
            )}
          />
          <Route path="/tasks" exact component={TasksPage} />
          <Route
            path="/sports"
            exact
            render={(props) => (
              <SportsPage {...props} handleTeam={this.handleTeam} />
            )}
          />
          <Route path="/news" exact component={NewsPage} />
          <Route path="/photos" exact component={PhotoPage} />
        </Router>
      </main>
    );
  }
}
