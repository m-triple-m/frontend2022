import { Button, Container, Paper, TextField } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import app_config from "../config";

const Signup = () => {
  const url = app_config.backend_url;

  // 1. create an object to initialize formik
  const userForm = {
    username: "",
    password: "",
    email: "",
    age: 0,
  };

  //   2. create a callback function for form submission
  const userSubmit = (formdata) => {
    console.log(formdata);

    // 1. Address
    // 2. Method
    // 3. Data
    // 4. Data format

    // to request on backend
    fetch(url + "/user/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    //
  };

  const uploadFile = (e) => {
    // extracting file from input
    const file = e.target.files[0];

    // create formdata
    const fd = new FormData();
    fd.append("file", file);

    // request for uploading file
    fetch(url + "/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      console.log(res.status);
    });
  };

  //   3. add formik in jsx
  return (
    <Paper>
      <Container>
        <Formik initialValues={userForm} onSubmit={userSubmit}>
          {({ values, handleSubmit, handleChange }) => (
            <form onSubmit={handleSubmit}>
              <TextField
                label="Username"
                variant="outlined"
                id="username"
                onChange={handleChange}
                value={values.username}
              />
              <TextField
                label="Email"
                variant="outlined"
                id="email"
                onChange={handleChange}
                value={values.email}
              />
              <TextField
                type="password"
                label="Password"
                variant="outlined"
                id="password"
                onChange={handleChange}
                value={values.password}
              />
              <TextField
                type="number"
                label="Age"
                variant="outlined"
                id="age"
                onChange={handleChange}
                value={values.age}
              />

              <Button type="submit" variant="contained">
                Submit
              </Button>

              <input
                type="file"
                className="form-control"
                onChange={uploadFile}
              />
            </form>
          )}
        </Formik>
      </Container>
    </Paper>
  );
};

export default Signup;
