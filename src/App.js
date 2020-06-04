import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "./global.css";
import LoginPage from "./Pages/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage";
import DashboardPage from "./Pages/DashboardPage";
import TasksPage from "./Pages/TasksPage";
import SportsPage from "./Pages/SportsPage";
import NewsPage from "./Pages/NewsPage";
import PhotoPage from "./Pages/PhotoPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      team: localStorage.getItem("teamdata") || "Choose a team",
      user: localStorage.getItem("user") || "No user",
    };
  }

  render() {
    return (
      <main>
        <ToastContainer autoClose={3000} hideProgressBar />

        <Route exact path="/" render={(props) => <LoginPage {...props} />} />
        <Route
          exact
          path="/register"
          render={(props) => <RegistrationPage {...props} />}
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
            />
          )}
        />
        <Route path="/tasks" exact component={TasksPage} />
        <Route
          path="/sports"
          exact
          render={(props) => <SportsPage {...props} />}
        />
        <Route path="/news" exact component={NewsPage} />
        <Route path="/photos" exact component={PhotoPage} />
      </main>
    );
  }
}
