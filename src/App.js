  
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import LoginPage from "./Pages/LoginPage";

function App(){
  return (
    <main>
      <Router>
        <Route path="/" exact component={LoginPage} />
      </Router>
    </main>
  );
}

export default App;
