import React, { useState } from "react";
import "./auth.css";
import { Link } from "react-router-dom";
import { loggedIn } from "../../actions";
import { useDispatch } from "react-redux";
const Login = props => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({ userName: "", password: "" });
  const [isLogged, setLogged] = useState(0);
  const handleUserData = e => {
    const { name, value } = e.target;
    console.log(name, value);
    setUserData({ ...userData, [name]: value });
  };
  const handleAuthSubmit = () => {
    fetch("http://localhost:4000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userName: userData.userName,
        password: userData.password
      })
    })
      .then(response => response.json())
      .then(data => {
        console.table("[Response from ]", data);
        if (data.hasOwnProperty("id")) {
          setLogged(1);
          dispatch(loggedIn(data.userName));
          props.history.push("/");
        } else {
          setLogged(2);
        }
      })
      .catch(err => {
        console.warn("Error Occured while signedUp", err);
        setLogged(2);
      });
    console.log(props);
  };
  const displayMessages = [
    <React.Fragment>
      {"Enter your details, If you do not created account yet,please "}
      <Link to="/signup">signup</Link>
    </React.Fragment>,
    "Success",
    <p style={{ color: "red" }}>Error occured , please try again...</p>
  ];

  return (
    <div className="auth-form-panel">
      <div className="auth-form-container">
        <div className="status-header">
          <h3>{displayMessages[isLogged]}</h3>
        </div>
        <input
          name="userName"
          type="text"
          value={userData.userName}
          placeholder="username"
          required
          onChange={handleUserData}
        />
        <input
          name="password"
          type="password"
          value={userData.password}
          placeholder="password"
          onChange={handleUserData}
        />
        <button onClick={handleAuthSubmit}>Login</button>
      </div>
    </div>
  );
};

export default Login;
