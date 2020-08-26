import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import styled from 'styled-components'
import API from '../utils/API'
import axios from 'axios'


const Login = ({ errors, touched, status }) => {

  const [users, setUsers] = useState([])
  useEffect(() => {
    if (status) {
      setUsers([ ...users, status ])
    }
  }, [status])

  return (
    <Form>
        <h1>Potluck Planner</h1>
      {/* {touched.email && errors.email && <p className="error">{errors.email}</p>} */}
      <ErrorMessage name="email"/>
      <Field type="email" name="email" placeholder="Email" />

      {touched.password && errors.password && <p className="error">{errors.password}</p>}
      <Field type="password" name="password" placeholder="Password" />

      <button type="submit">Log In</button>
      <button type="button">Register</button>


      {users.map((user) => (
        <div>User: {user.email}</div>
      ))}
      {users.map((user) => {
        return <div>User: {user.email}</div>
      })}
      <h5 className="forgot"> Forget username and password?</h5>
    </Form>

  )
}

const FormikLogin = withFormik({
  mapPropsToValues ({email, password}) {
    return {
      email: email || '',
      password: password || '',

    }
  },

  validationSchema: yup.object().shape({
    email: yup.string().required('Email is required!'),
    password: yup.string().required('Password is required!')

  }),

  handleSubmit(users, { setStatus }) {
    API
      .post("/api/users", users)
      console.log(users)
      .then(res => {
        setStatus(res.data);
        // resetForm();
      })

      .catch(err => console.log("Axios error", err));
  }
})(Login)
export default FormikLogin;
