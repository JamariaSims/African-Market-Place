import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Crudi.css";

import AddTutorial from "./OtherComponents/add-tutorial.component";
import Tutorial from "./OtherComponents/tutorial.component";
import TutorialsList from "./OtherComponents/tutorials-list.component";

class Crudi extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/tutorials" className="navbar-brand">
            African Market Place
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/tutorials"} className="nav-link">
                Tutorials
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          
        </div>
      </div>
    );
  }
}

export default Crudi;