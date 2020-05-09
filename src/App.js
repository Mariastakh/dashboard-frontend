import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "./global.css"
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import DashboardPage from "./Pages/DashboardPage";
import TasksPage from "./Pages/TasksPage";
import SportsPage from "./Pages/SportsPage";
import NewsPage from "./Pages/NewsPage";
import PhotoPage from "./Pages/PhotoPage";

function App() {
  return (
    <main>
      <Router>
        <Route path="/" exact component={LoginPage} />
        <Route path="/signup" exact component={SignUpPage} />
        <Route path="/dashboard" exact component={DashboardPage} />
        <Route path="/tasks" exact component={TasksPage} />
        <Route path="/sports" exact component={SportsPage} />
        <Route path="/news" exact component={NewsPage} />
        <Route path="/photos" exact component={PhotoPage} />
      </Router>
    </main>
  );
}

export default App;
