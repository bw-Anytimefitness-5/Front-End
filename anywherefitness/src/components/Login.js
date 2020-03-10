/* eslint-disable no-lone-blocks */
import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

import axiosWithAuth from "../authentication/axiosWithAuth";

const Login = () => {
  return (
    <main className="login">
      <p style={{ textAlign: "center" }}>
        Please enter your username and password to login
      </p>
      <Form>
        <Field type="text" name="username" placeholder="username" />
        <Field type="password" name="password" placeholder="password" />
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
        <Link to="/signup" className="btn-link u-margin-top-big">
          Click Here to Sign up
        </Link>
      </Form>
    </main>
  );
};

const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password, department }) {
    return {
      username: username || "",
      password: password || "",
      department: department || ""
    };
  },
  //==================Validation Schema==============
  validationSchema: Yup.object().shape({
    username: Yup.string().required("username is required"),
    password: Yup.string().required("password is required"),
    department: Yup.string().required("Department is required")
  }),
  //==========End of Validation Schema=======

  handleSubmit(values, { resetForm, props }) {
    let history = props.history;
    let location = props.location;
    let { from } = location.state || { from: { pathname: "/" } };
    axiosWithAuth()
      .post("/login", {
        username: values.username,
        password: values.password,
        department: values.department
      })
      .then(res => {
        localStorage.setItem("token", res.data.token);
        history.replace(from);
        props.setAuth(true);
        localStorage.setItem("user", res.data.message);
        localStorage.setItem("department", values.department);

        // props.history.push("/dashboard");

        {
          values.department === "client"
            ? props.history.push("/dashboard")
            : props.history.push("/instructordashboard");
        }
      })
      .catch(err => console.log(err.message));

    resetForm();
  }
})(Login);

export default FormikLoginForm;
