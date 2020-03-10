import React from "react";
import { Navbar, NavLink } from "reactstrap";

const InNavBar = props => {
  return (
    <Navbar className="navBar">
      <NavLink href="/instructordashboard">Dashboard</NavLink>
      <NavLink href="/add-class">Add New Class</NavLink>
    </Navbar>
  );
};

export default InNavBar;
