/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchSingleClass, fetchDeleteClass } from "../../actions";

import ClassCard from "../ClassCard";

class InstructorClass extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSingleClass(this.props.match.params.id);
  }

  handleDelete = e => {
    e.preventDefault();
    fetchDeleteClass(this.props.match.params.id);
    this.props.history.push("/instructordashboard");
  };

  render() {
    return (
      <section className="classDetail">
        <div>
          {this.props.class.map(data => (
            <ClassCard key={data.id} data={data} />
          ))}
        </div>
        <div className="cardButtons">
          <button
            onClick={() =>
              this.props.history.push(
                `/update-class/${this.props.match.params.id}`
              )
            }
          >
            Edit
          </button>

          <button onClick={this.handleDelete}>Delete</button>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    class: state.singleClass.class
  };
};

export default connect(mapStateToProps, { fetchSingleClass })(InstructorClass);
