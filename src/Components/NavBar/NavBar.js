import React, { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { server } from '../API/Server';
import "./NavBar.css";
import axios from "axios";

export default function NavBar() {
  var history = useHistory();
  var isAuthenticated = false;
  var auth_token = localStorage.getItem("student_auth_token");
  var username = localStorage.getItem("student_username");
  const [logout, setLogout] = useState();
  const nextURL = useParams();
  console.log("next", nextURL);

  if (auth_token && username) {
    isAuthenticated = true;
  } else {
    isAuthenticated = false;
  }

  function logoutFun() {
    axios
      .get(`${server}/api/logout/`)
      .then((res) => {
        setLogout(res.data);
        console.log(res.data);
        localStorage.removeItem("student_auth_token");
        localStorage.removeItem("student_username");
        history.push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          style={{
            backgroundColor: "#f1f1f1",
            position: "fixed",
            width: "100%",
            height: "20px",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            style={{ color: "#000" }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              StudyOuk
            </Link>
          </Typography>

          {isAuthenticated ? (
            <div className="authenticated-div">
              <p className="welcome-txt">{`Welcome ${username}`}</p>
              <Link to="/purchased/courses" style={{ textDecoration: "none" }}>
                <p className="logout-txt">Purchased course</p>
              </Link>
              <p className="logout-txt" onClick={logoutFun}>
                Logout
              </p>
            </div>
          ) : (
            <>
              <Button color="inherit" style={{ color: "#000" }}>
                <Link
                  to="/login/"
                  style={{ textDecoration: "none" }}
                >
                  Login
                </Link>
              </Button>
              <Button color="inherit" style={{ color: "#000" }}>
                <Link to="/register/" style={{ textDecoration: "none" }}>
                  Signup
                </Link>
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      <div style={{ height: "50px" }}></div>
    </Box>
  );
}