import { createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import NotFound from "./components/404";
import Admin from "./components/admin";
import AdminProfile from "./components/admin/profile";
import EventHandling from "./components/eventhandling";
import Gallery from "./components/gallery";
import Header from "./components/header";
import Home from "./components/home";
import Login from "./components/login";
import ManageUser from "./components/admin/manageuser";
import Signup from "./components/signup";
import { Toaster } from "react-hot-toast";

function App() {
  const username = "Peter Parkr";
  const age = 34;

  const [darkTheme, setDarkTheme] = useState(false);

  const theme1 = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#0f1f2e",
      },
    },
  });

  const theme2 = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#210808",
      },
    },
  });

  return (
    <div>
      <ThemeProvider theme={darkTheme ? theme1 : theme2}>
        <Toaster position="top-right" reverseOrder={false} />
        <BrowserRouter>
          <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />

          <Routes>
            <Route
              element={<Login username={username} age={age}></Login>}
              path="login"
            />
            <Route element={<Home username={username}></Home>} path="home" />
            <Route element={<NotFound />} path="404" />
            <Route element={<EventHandling />} path="event" />
            <Route element={<Gallery />} path="gallery" />
            <Route element={<Signup />} path="signup" />
            <Route element={<ManageUser />} path="manageuser" />

            <Route element={<Admin />} path="admin">
              <Route element={<AdminProfile />} path="profile" />
            </Route>

            <Route element={<Navigate to="/home"></Navigate>} path="" />
            <Route element={<Navigate to="/404"></Navigate>} path="*" />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
