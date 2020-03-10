import React from "react";
import { Navbar, NavLink } from "reactstrap";

const ClNavBar = props => {
  return (
    <Navbar className="navBar">
      <NavLink href="/dashboard">Dashboard</NavLink>
      <NavLink href="/Reserved-Class/">Reservations</NavLink>
    </Navbar>
  );
};

export default ClNavBar;
