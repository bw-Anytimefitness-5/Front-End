import React, { Component } from "react";
import ClassList from "./InstructorClassList";

class InstructorDashboard extends Component {
  render() {
    return (
      <main>
        <h1 className="primaryHeading">Dashboard</h1>
        <ClassList />
      </main>
    );
  }
}

export default InstructorDashboard;
