import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import axiosWithAuth from "../../authentication/axiosWithAuth";
import { fetchUpdateClass } from "../../actions";

const initialItems = {
  name: "",
  type: "",
  length_minutes: "",
  intensitylvl: "",
  location: "",
  current_size: "",
  max_size: ""
};
const UpdateClass = props => {
  const [items, setItems] = useState(initialItems);

  useEffect(() => {
    axiosWithAuth()
      .get(`/${props.match.params.id}`)
      .then(res => {
        res.data.map(item => setItems(item));
      })
      .catch(err => console.log(err));
  }, [props.match.params.id]);

  const handleChange = e => {
    e.preventDefault();

    setItems({
      ...items,
      [e.target.name]: e.target.value
    });
  };

  const handelSubmit = e => {
    e.preventDefault();
    props.fetchUpdateClass(items);
    props.history.goBack();
  };
  return (
    <>
      <section className="update-class">
        <h1 className="primaryHeading">update class </h1>
        <form onSubmit={handelSubmit}>
          <div className="inputField">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              value={items.name}
              onChange={handleChange}
            />
          </div>

          <div className="inputField">
            <label htmlFor="name">Type: </label>
            <input
              type="text"
              name="type"
              value={items.type}
              onChange={handleChange}
            />
          </div>

          <div className="inputField">
            <label htmlFor="length_minutes">Length in Minutes: </label>
            <input
              type="number"
              name="length_minutes"
              value={items.length_minutes}
              onChange={handleChange}
            />
          </div>

          <div className="inputField">
            <label htmlFor="intensitylvl">Inensity Level: </label>
            <input
              type="text"
              name="intensitylvl"
              value={items.intensitylvl}
              onChange={handleChange}
            />
          </div>

          <div className="inputField">
            <label htmlFor="location">Location: </label>
            <input
              type="text"
              name="location"
              value={items.location}
              onChange={handleChange}
            />
          </div>

          <div className="inputField">
            <label htmlFor="current_size">Current Size: </label>
            <input
              type="number"
              name="current_size"
              value={items.current_size}
              onChange={handleChange}
            />
          </div>

          <div className="inputField">
            <label htmlFor="max_size">Max Size: </label>
            <input
              type="number"
              name="max_size"
              value={items.max_size}
              onChange={handleChange}
            />
          </div>

          <button className="btn u-margin-top-medium">Update Class</button>
        </form>
      </section>
    </>
  );
};

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, { fetchUpdateClass })(UpdateClass);
