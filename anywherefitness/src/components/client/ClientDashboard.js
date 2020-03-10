import React, { Component } from "react";
import ClassList from "./ClientClassList";
import axiosWithAuth from "../../authentication/axiosWithAuth";

import ClassCard from "../ClassCard";
// import ClientGuide from "./ClientGuide";

export default class ClientDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: false,
      searchTerm: "",
      resultData: []
    };
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({
      searchTerm: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post(`/search`, {
        name: this.state.searchTerm
      })
      .then(res => {
        this.setState({
          resultData: res.data
        });
      })
      .catch(err => console.log(err));

    if (this.state.searchTerm !== "") {
      this.setState({
        results: true
      });
    }
  };

  handleClasses = e => {
    e.preventDefault();
    this.setState({
      results: false,
      searchTerm: ""
    });
  };

  header = () => {
    return (
      <main>
        <h1 style={{ textAlign: "center", marginTop: "2rem" }}>
          {localStorage.getItem("user")}
        </h1>
        <h1 className="primaryHeading">My Dashboard</h1>

        <div className="searchContainer">
          <h2>Search Available Classes</h2>
          <form onSubmit={this.handleSubmit}>
            <input
              className="classSearch"
              id="name"
              type="text"
              name="name"
              placeholder="search"
              value={this.state.searchTerm}
              onChange={this.handleChange}
            />
            <button className="btn">Submit</button>
          </form>
        </div>
      </main>
    );
  };
  render() {
    console.log("resultdata: ", this.state.resultData.length);
    if (this.state.resultData.length === 0 && this.state.results === true) {
      return (
        <div>
          {this.header()}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <h3>there is no search results</h3>
            <button onClick={this.handleClasses} className="btn-class">
              Click here to see all classes
            </button>
          </div>
        </div>
      );
    } else if (
      this.state.resultData.length >= 1 &&
      this.state.results === true
    ) {
      return (
        <div>
          {this.header()}
          <button onClick={this.handleClasses} className="btn-class">
            Click Here to Go Back to Class List
          </button>
          {this.state.resultData.map(data => (
            <ClassCard key={data.id} data={data} />
          ))}
        </div>
      );
    } else {
      return (
        <div>
          {this.header()}
          <ClassList />
        </div>
      );
    }
  }
}
