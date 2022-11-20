import React from "react";
import { useFormik } from "formik";
import validationSchema from "./validations";

function SignUp() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
    validationSchema,
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <label htmlFor="passwordConfirm">Password Confirm</label>
      <input
        id="passwordConfirm"
        name="passwordConfirm"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.passwordConfirm}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SignUp;
