/* eslint-disable no-unused-vars */
import React from "react";
import { Component } from "react";
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";
import { Route, Redirect } from "react-router-dom";

import PrivateRoute from "../authentication/PrivateRoute";

import Login from "./Login";

import ClNavBar from "./client/ClNavBar";
import InNavBar from "./instructor/InNavBar";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      department: localStorage.getItem("department")
      // department: ""
    };
  }
  
  handleLogout = e => {
    e.preventDefault();
    this.props.setAuth(false);
    localStorage.clear("token");
    localStorage.clear("user");
    localStorage.clear("department");

    this.setState({
      department: ""
    });
  };

  render() {
    console.log("header.js: ", this.state.department);
    if (this.state.department === "client") {
      return (
        <header className="header" style={{ marginBottom: "2rem" }}>
          <section className="headerTop">
            <div>
              <h1>{localStorage.getItem("user")}</h1>
              <h2>We at Anywhere Fitness Love to have as a student</h2>
            </div>
            <button
              onClick={this.handleLogout}
              style={{ color: "red" }}
              className="btn-logout"
            >
              Logout
            </button>
          </section>
          <PrivateRoute component={ClNavBar} />
        </header>
      );
    } else if (this.state.department === "instructor") {
      return (
        <header className="header" style={{ marginBottom: "2rem" }}>
          <section className="headerTop">
            <div>
              <h1>{localStorage.getItem("user")}</h1>
              <h2>We at Anywhere Fitness Love to have as an Instructor</h2>
            </div>
            <button
              onClick={this.handleLogout}
              style={{ color: "red" }}
              className="btn-logout"
            >
              Logout
            </button>
          </section>
          <PrivateRoute component={InNavBar} />
        </header>
      );
    } else {
      return (
        <header className="header" style={{ marginBottom: "2rem" }}>
          <h1>Welcome to Anywhere Fitness App</h1>
          {/* <Link to="/login">Login</Link> */}
          <Redirect to="/login" />
        </header>
      );
    }
  }
}

export default Header;
