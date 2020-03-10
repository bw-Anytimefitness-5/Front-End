import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

import axiosWithAuth from "../authentication/axiosWithAuth";

const Signup = props => {
  return (
    <section className="signup">
      <Link to="/login" className="btn-link u-margin-bottom-medium">
        Click here to login
      </Link>
      <p>Please fill out the form below to sign up</p>
      <Form>
        <Field type="text" name="username" placeholder="username" />
        {props.touched.username && props.errors.username && (
          <p className="error">{props.errors.username}</p>
        )}
        <Field type="password" name="password" placeholder="password" />
        {props.touched.password && props.errors.password && (
          <p className="error">{props.errors.password}</p>
        )}
        <Field
          type="password"
          name="passwordVerify"
          placeholder="Verify password"
        />
        {props.touched.passwordVerify && props.errors.passwordVerify && (
          <p className="error">{props.errors.passwordVerify}</p>
        )}
        <Field as="select" name="department">
          <option value="">Choose Department</option>
          <option value="client">Client</option>
          <option value="instructor">Instructor</option>
        </Field>
        <button
          type="submit"
          className="btn u-margin-top-medium u-margin-bottom-medium"
        >
          Submit
        </button>
      </Form>
    </section>
  );
};

const FormikSingupForm = withFormik({
  mapPropsToValues({ username, password, passwordVerify, department }) {
    return {
      username: username || "",
      password: password || "",
      passwordVerify: passwordVerify || "",
      department: department || ""
    };
  },
  //================validation===================
  validationSchema: Yup.object({
    // username: Yup.string().required("username is required"),
    password: Yup.string().required("password is required"),

    passwordVerify: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords don't match"
    )
  }),

  // Yup.string()
  //     .oneOf([Yup.ref("password"), null])
  //     .required("Password confirm is required")

  //=========end of validation===================

  handleSubmit(values, { resetForm, props }) {
    axios
      .post("https://anywhere-fitness92.herokuapp.com/api/auth/register", {
        username: values.username,
        password: values.password,
        department: values.department
      })
      .then(res => () => {
        console.log("registration data: ", res);
        axiosWithAuth()
          .post("/login", {
            username: values.username,
            password: values.password,
            department: values.department
          })
          .then(res => {
            localStorage.setItem("token", res.data.token);
            props.history.push("/dashboard");
          });
      })
      .catch(err => console.log(err.message));
  }
})(Signup);

export default FormikSingupForm;

