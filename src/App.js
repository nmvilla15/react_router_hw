import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./About";
import Rocky from "./Rocky";
import NavBar from "./Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
        <NavBar />
        <Switch>
          <Route path="/app" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/rocky" component={Rocky}/>
        </Switch>
    </div>  
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Hello!</h1>
    <h3>Welcome to my bootleg page.</h3>
  </div>
);

export default App;
