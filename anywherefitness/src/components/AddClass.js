/* eslint-disable no-unused-vars */
import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

import axiosWithAuth from "../axiosWithAuth";

const Signup = () => {
  return (
    <Form>
      <Field type="text" name="className" placeholder="Class Name" />
      <Field type="text" name="typeOfClass" placeholder="Type of Class" />
      <Field type="time" name="startTime" placeholder="Start Time" />
      <Field type="text" name="lengthOfClass" placeholder="Length of Class" />
      <Field type="text" name="intensity" placeholder="Intensity Level" />
      <Field type="text" name="location" placeholder="Location" />
      <Field
        type="text"
        name="numberOfStudents"
        placeholder="Current Students Attending"
      />
      <Field type="text" name="maxClassSize" placeholder="Max Class Size" />
    </Form>
  );
};

export default Signup;
