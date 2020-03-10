/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchReservedClasses } from "../../actions";
import ClassCard from "../ClassCard";

class MyReservations extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchReservedClasses();
    this.setState({
      results: this.props.classes
    });
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({
      searchTerm: e.target.value
    });

    console.log("value: ", e.target.value);
  };

  render() {
    if (this.props.classes.length >= 1) {
      return (
        <div>
          {this.props.classes.map(data => (
            <ClassDetail key={data.id} data={data} />
          ))}
        </div>
      );
    } else {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "5rem"
          }}
        >
          <p> You do not have any reservations</p>
          <Link
            to="/dashboard"
            className="btn-class"
            style={{ padding: ".5rem 1rem" }}
          >
            Clich here to see all the class
          </Link>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  console.log("state reserved class: ", state);
  return {
    classes: state.classes.reservedClasses
  };
};

export default connect(mapStateToProps, { fetchReservedClasses })(
  MyReservations
);

function ClassDetail({ data }) {
  return (
    <>
      <Link to={`/Client-Class/${data.id}`}>
        <ClassCard key={data.id} data={data} />
      </Link>
    </>
  );
}
