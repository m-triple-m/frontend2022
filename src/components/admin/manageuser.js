import { Delete, Edit, ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Container,
  Fab,
  TextField,
} from "@mui/material";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import app_config from "../../config";

const ManageUser = () => {
  const url = app_config.backend_url;

  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [updateFormData, setUpdateFormData] = useState({});

  const fetchUserData = () => {
    fetch(url + "/user/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserList(data);
        setLoading(false);
      });
  };

  // effect hook

  useEffect(() => {
    fetchUserData();
  }, []);

  const deleteUser = (id) => {
    fetch(url + "/user/delete/" + id, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status === 200) {
          fetchUserData();
        }
        return res.json();
      })
      .then((data) => {
        toast(data.username + " Deleted!", {
          icon: "💀",
        });
      });
  };

  const displayUsers = () => {
    if (!loading) {
      return userList.map(
        ({ age, createdAt, email, password, username, _id }) => (
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              {username}
            </AccordionSummary>
            <AccordionDetails>
              <h5>Age : {age}</h5>
              <h5>Email : {email}</h5>
              <h5>Username : {username}</h5>
              <h5>password : {password}</h5>
              <h5>
                Added on : {new Date(createdAt).toLocaleDateString()}{" "}
                {new Date(createdAt).toLocaleTimeString()}
              </h5>

              <Fab
                className="mt-4"
                color="secondary"
                size="medium"
                variant="extended"
                onClick={(e) => deleteUser(_id)}
              >
                <Delete />
                &nbsp;&nbsp;Delete User
              </Fab>
              <Fab
                className="mt-4"
                color="success"
                size="medium"
                variant="extended"
                onClick={(e) => {
                  setShowUpdateForm(true);
                  setUpdateFormData({
                    age,
                    createdAt,
                    email,
                    password,
                    username,
                    _id,
                  });
                }}
              >
                <Edit />
                &nbsp;&nbsp;Update User
              </Fab>
            </AccordionDetails>
          </Accordion>
        )
      );
    }
  };

  const updateUser = (formdata) => {
    console.log(formdata);
  };

  const updateForm = () => {
    if (showUpdateForm) {
      return (
        <Formik initialValues={updateFormData} onSubmit={updateUser}>
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

              <Button
                color="error"
                variant="contained"
                onClick={(e) => {
                  setShowUpdateForm(false);
                }}
              >
                Cancel
              </Button>
            </form>
          )}
        </Formik>
      );
    }
  };

  return (
    <div>
      <h1>ManageUser</h1>
      <Container>
        {displayUsers()}
        {updateForm()}
      </Container>
    </div>
  );
};

export default ManageUser;
