// 1. React Components are represented by Functions
// 2. Component names should start with Uppercase
// 3. There should be a top level return statement inside component
// 4. Components should be exported in order to import them anywhere.

import { Button, Card, CardContent, Container, TextField } from "@mui/material";
import { Formik } from "formik";
import Swal from "sweetalert2";
import app_config from "../config";

const Login = ({ username, age }) => {
  const url = app_config.backend_url;

  // 1. formobject

  const loginForm = {
    email: "",
    password: "",
  };

  // 2. submit function

  const loginSubmit = (formdata) => {
    console.log(formdata);

    fetch(url + "/user/authenticate", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Loggedin Successfully",
        });
      } else if (res.status === 400) {
        Swal.fire({
          icon: "error",
          title: "OOps!",
          text: "Loggedin Failed",
        });
      }

      return res.json();
    });
  };

  // 3. use Formik

  return (
    <div style={{ background: "#ccc" }}>
      <Container
        maxWidth="xs"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
      >
        <Card>
          <CardContent>
            <p className="text-center h3 mb-5 mt-5">Login Here</p>

            <Formik initialValues={loginForm} onSubmit={loginSubmit}>
              {({ values, handleSubmit, handleChange }) => (
                <form onSubmit={handleSubmit}>
                  <TextField
                    color="secondary"
                    label="Email"
                    type="email"
                    variant="filled"
                    className="w-100 mb-4"
                    helperText="Enter Your Email ID"
                    id="email"
                    onChange={handleChange}
                    value={values.email}
                  />
                  <TextField
                    label="Password"
                    type="password"
                    variant="filled"
                    className="w-100 mb-4"
                    id="password"
                    onChange={handleChange}
                    value={values.password}
                  />
                  <Button
                    type="submit"
                    sx={{ background: "blue" }}
                    className="mt-5 w-100"
                    variant="contained"
                  >
                    Login Now
                  </Button>
                </form>
              )}
            </Formik>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Login;
