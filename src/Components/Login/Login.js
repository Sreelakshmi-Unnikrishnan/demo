import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import "./Login.css";
import NavBar from "../NavBar/NavBar";
import { server } from '../API/Server';

function Login() {
  const [username, setUsername] = useState("");
  const [usernameRequired, setUsernameRequired] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordRequired, setPasswordRequired] = useState(false);

  const [token, setToken] = useState("");

  const [error, setError] = useState(false);

  const history = useHistory();
  const nextURL = useParams();
  console.log("next", nextURL);

  var user_token = localStorage.getItem("student_auth_token");
  var user_username = localStorage.getItem("student_username");

  useEffect(() => {
    if (user_token && user_username) {
      history.push("/explorecourse/");
    }
  });

  const loginBtn = () => {
    if (username == "" && password == "") {
      setUsernameRequired(true);
      setPasswordRequired(true);
    } else {
      if (username == "") {
        setUsernameRequired(true);
      } else {
        setUsernameRequired(false);
      }

      if (password == "") {
        setPasswordRequired(true);
      } else {
        setPasswordRequired(false);
      }
      if (username != "" && password != "") {
        postData();
      }
    }
  };

  function postData() {
    axios
      .post(`${server}/api/login/`, {
        username,
        password,
      })
      .then((res) => {
        localStorage.setItem("student_auth_token", res.data["token"]);
        localStorage.setItem("student_username", username);
        if (nextURL["next"] == "next=paymentpage") {
          history.push("/purchase/course");
        } else if (nextURL["next"] == "next=homepage") {
          history.push("/explorecourse/");
        } else {
          history.push("/explorecourse/");
        }
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }

  return (
    <div>
      <NavBar />
      <div className="first">
        <div className="second">
          <h3>Login</h3>
          {error ? <p>Invalid Credentials</p> : null}

          <div className="form1">
            <label>Username</label>
            <input
              className="input"
              type="text"
              required
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {usernameRequired ? (
              <span className="text-danger">This field is required</span>
            ) : null}

            <label>Password</label>
            <input
              type="password"
              required
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordRequired ? (
              <span className="text-danger">This field is required</span>
            ) : null}
            <input
              className="submit"
              type="submit"
              value="Login"
              onClick={loginBtn}
            />
            <span>
              Don't have an account? <Link to="/register">Join Now</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;