import React from "react";
import { Route, Switch } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";

// components
import Header from "../components/Header";
import Footer from "../components/Footer";
import Login from "../components/Login";
import SignUp from "../components/Signup";

import ClientDashboard from "../components/client/ClientDashboard";
import ClientClass from "../components/client/ClientClass";
import MyReservations from "../components/client/MyReservations";
import ClNavBar from "../components/client/ClNavBar";

import InstructorDashboard from "../components/instructor/InstructorDashboard";
import UpdateClass from "../components/instructor/UpdateClass";
import InstructorClass from "../components/instructor/InstructorClass";
import InNavBar from "../components/instructor/InNavBar";
import AddClass from "../components/instructor/AddClass";

import App from "../App";
const Router = props => (
  <Switch>
    <PrivateRoute
      exact
      path="/Instructor-Class/:id"
      component={InstructorClass}
    />
    <PrivateRoute exact path="/Client-Class/:id" component={ClientClass} />
    <PrivateRoute exact path="/Reserved-Class/" component={MyReservations} />

    <PrivateRoute exact path="/update-class/:id" component={UpdateClass} />
    <PrivateRoute exact path="/update-class" component={UpdateClass} />
    <PrivateRoute exact path="/add-class" component={AddClass} />
    <Route exact path="/signup" component={SignUp} />
    <Route exact path="/" component={App} />
  </Switch>
);

export default Router;
