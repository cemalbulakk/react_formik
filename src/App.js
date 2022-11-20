import "./App.css";
import { Formik } from "formik";

function App() {
  return (
    <div className="App">
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          firstName: "Cemal Salih",
          lastName: "Bulak",
          email: "test@test.com",
          gender: "male",
          hobies: [],
          country: "Turkey",
        }}
        onSubmit={async (values) => {
          console.log(JSON.stringify(values, null, 2));
        }}
      >
        {({ handleSubmit, handleChange, values }) => (
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
                  value={values.firstName}
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
                  value={values.lastName}
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
                  value={values.email}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="gender">Gender</label>
              </div>
              <div className="col">
                <span>male</span>
                <input
                  name="gender"
                  value={"male"}
                  onChange={handleChange}
                  type={"radio"}
                  checked={values.gender === "male"}
                />
                <span>famale</span>
                <input
                  name="gender"
                  value={"famale"}
                  onChange={handleChange}
                  type={"radio"}
                  checked={values.gender === "famale"}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div>
                  <input
                    type={"checkbox"}
                    name="hobies"
                    value={"football"}
                    onChange={handleChange}
                  />
                  football
                </div>
                <div>
                  <input
                    type={"checkbox"}
                    name="hobies"
                    value={"cinema"}
                    onChange={handleChange}
                  />
                  cinema
                </div>
                <div>
                  <input
                    type={"checkbox"}
                    name="hobies"
                    value={"photography"}
                    onChange={handleChange}
                  />
                  photography
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <select
                  name="country"
                  onChange={handleChange}
                  value={values.country}
                >
                  <option value={"Turkey"}>Turkey</option>
                  <option value={"England"}>England</option>
                  <option value={"USA"}>USA</option>
                </select>
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
