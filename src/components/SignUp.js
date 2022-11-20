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

  console.log(formik.errors);
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        onBlur={formik.handleBlur}
      />

      {formik.errors.email && formik.touched.email && (
        <div className="error">{formik.errors.email}</div>
      )}

      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        onBlur={formik.handleBlur}
      />

      {formik.errors.password && formik.touched.password && (
        <div className="error">{formik.errors.password}</div>
      )}

      <label htmlFor="passwordConfirm">Password Confirm</label>
      <input
        id="passwordConfirm"
        name="passwordConfirm"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.passwordConfirm}
        onBlur={formik.handleBlur}
      />
      {formik.errors.passwordConfirm && formik.touched.passwordConfirm && (
        <div className="error">{formik.errors.passwordConfirm}</div>
      )}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SignUp;
