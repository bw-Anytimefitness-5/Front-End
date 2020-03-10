import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

import axiosWithAuth from "../../authentication/axiosWithAuth";

const AddClass = () => {
  return (
    <Form>
      <Field type="text" name="className" placeholder="Class Name" />
      <Field type="text" name="typeOfClass" placeholder="Type of Class" />
      <Field type="number" name="lengthOfClass" placeholder="Length of Class" />
      <Field type="text" name="intensity" placeholder="Intensity Level" />
      {/* <Field type="text" name="location" placeholder="Location" /> */}
      <Field type="text" name="classLocation" placeholder="Location" />

      <Field
        type="text"
        name="currentSize"
        placeholder="Current Students Attending"
      />
      <Field type="text" name="maxSize" placeholder="Max Class Size" />
      <button type="submit" className="btn u-margin-top-medium">
        Submit
      </button>
    </Form>
  );
};

const FormikAddClassForm = withFormik({
  mapPropsToValues({
    className,
    typeOfClass,
    lengthOfClass,
    intensity,
    classLocation,
    currentSize,
    maxSize
  }) {
    return {
      className: className || "",
      typeOfClass: typeOfClass || "",
      lengthOfClass: lengthOfClass || "",
      intensity: intensity || "",
      classLocation: classLocation || "",
      currentSize: currentSize || "",
      maxSize: maxSize || ""
    };
  },
  //=========validation=========
  //======end of validation==========
  handleSubmit(values) {
    console.log("add class value:", values);
    axiosWithAuth()
      .post("/createclass", {
        name: values.className.toLowerCase(),
        type: values.typeOfClass,
        Length_minutes: values.lengthOfClass,
        intensity_lvl: values.intensity,
        location: values.location,
        current_size: values.currentSize,
        max_size: values.maxSize
      })
      .then(res => console.log("submitted class: ", res))
      .catch(err => console.log(err.message));
  }
})(AddClass);

export default FormikAddClassForm;
