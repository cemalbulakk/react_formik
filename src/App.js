import "./App.css";
import { Formik } from "formik";

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
        {({ handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col">
                <label htmlFor="firstName">First Name</label>
              </div>
              <div className="col">
                <input
                  type={"text"}
                  name="firstName"
                  placeholder="First Name"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="lastName">Last Name</label>
              </div>
              <div className="col">
                <input
                  id="lastName"
                  name="lastName"
                  placeholder="Doe"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="email">Email</label>
              </div>
              <div className="col">
                <input
                  id="email"
                  name="email"
                  placeholder="jane@acme.com"
                  type="email"
                  onChange={handleChange}
                />
              </div>
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default App;
