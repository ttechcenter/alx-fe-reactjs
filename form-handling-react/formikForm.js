import React from 'react';
import { Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

function FormikForm() {
  const handleSubmit = (values) => {
    // Submit form data to API
    console.log(values);
  };

  return (
    <Form onSubmit={handleSubmit} validationSchema={validationSchema}>
      <Field name="username" type="text" placeholder="Username" />
      <ErrorMessage name="username" component="div" className="error" />
      <br />
      <Field name="email" type="email" placeholder="Email" />
      <ErrorMessage name="email" component="div" className="error" />
      <br />
      <Field name="password" type="password" placeholder="Password" />
      <ErrorMessage name="password" component="div" className="error" />
      <br />
      <button type="submit">Submit</button>
    </Form>
  );
}

export default FormikForm;
