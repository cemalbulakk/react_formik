import "./App.css";
import { Formik, Field, Form } from "formik";

function App() {
  return (
    <div className="App">
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        onSubmit={async (values) => {
          console.log(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <div className="row">
            <div className="col">
              <label htmlFor="firstName">First Name</label>
            </div>
            <div className="col">
              <Field id="firstName" name="firstName" placeholder="Jane" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="lastName">Last Name</label>
            </div>
            <div className="col">
              <Field id="lastName" name="lastName" placeholder="Doe" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="email">Email</label>
            </div>
            <div className="col">
              <Field
                id="email"
                name="email"
                placeholder="jane@acme.com"
                type="email"
              />
            </div>
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default App;
