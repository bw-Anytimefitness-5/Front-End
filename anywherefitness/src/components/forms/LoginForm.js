import React,{useState} from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { axiosWithAuth } from "../AxiosWithAuth/axiosWithAuth";
const LoginForm =(props) =>{
    return(
        <Form>
      <Field type="text" name="username" placeholder="Username" />
      <Field type="password" name="password" placeholder="Password" />
      <button>Submit!</button>
    </Form>
    )
}


const FormikLoginForm = withFormik({
  
  
    mapPropsToValues({ username, password }) {
      return {
        username: username || "",
        password: password || ""
      };
    },
    validationSchema: Yup.object().shape({
      username: Yup.string()
        .required(),
      password: Yup.string()
        .min(6)
        .required()
    }),
  
    handleSubmit(values) {
      console.log(values);
      //THIS IS WHERE YOU DO YOUR FORM SUBMISSION CODE... HTTP REQUESTS, ETC.
    }
  })(LoginForm);
export default FormikLoginForm