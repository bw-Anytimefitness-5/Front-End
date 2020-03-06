import React,{useState} from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from 'axios'
const LoginForm =() =>{
    return(
        <Form>
      <Field type="text" name="username" placeholder="Username" />
      <Field type="password" name="password" placeholder="Password" />
      <Field type="password" name="passwordConfirmation" placeholder="Confirm Password" />
      <Field type="text" name="firstName" placeholder="First Name" />
      <Field type="text" name="lastName" placeholder="Last Name" />
      <Field type="email" name="email" placeholder="Email" />
      <Field as="select" name="roleId">
                    <option value="1">Instructor</option>
                    <option value="2">Client</option>
                </Field>
      <button>Submit!</button>
    </Form>
    )
}


const signUpForm = withFormik({
  
  
    mapPropsToValues({ username, password,passwordConfirmation,firstName,lastName,email,roleId }) {
      return {
        username: username || "",
        password: password || "",
        firstName: firstName || "",
        lastName: lastName || "",
        email: email || "",
        roleId : roleId ||""
      };
    },
    validationSchema: Yup.object().shape({
      username: Yup.string()
        .required(),
      password: Yup.string()
        .min(6)
        .required(),
      passwordConfirmation: Yup.string()
     .oneOf([Yup.ref('password'), null], 'Passwords must match'),
      firstName: Yup.string()
        .required(),
      lastName: Yup.string()
        .required(),
      email: Yup.string().email()
      .required(),
      roleId: Yup.number().oneOf([1,2]).required()
    }),
  
    handleSubmit(values) {
        const newValues = {
            username: values.username,
            password : values.password,
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            roleId: parseInt(values.roleId)
        }
      console.log(newValues);
      axios
        .post('https://lambda-anywhere-fitness.herokuapp.com/api/auth/register', newValues)
        .then(res =>{
            console.log(res)
        })
      //THIS IS WHERE YOU DO YOUR FORM SUBMISSION CODE... HTTP REQUESTS, ETC.
    }
  })(LoginForm);
export default signUpForm