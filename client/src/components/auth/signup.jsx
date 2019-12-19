import React, { useState } from "react";
import "./auth.css";
import { Link } from "react-router-dom";
const SignUp = props => {
  const [userData, setUserData] = useState({ userName: "", password: "" });
  const [isSigned, setSigned] = useState(0);
  const handleUserData = e => {
    const { name, value } = e.target;
    console.log(name, value);
    setUserData({ ...userData, [name]: value });
  };
  const handleAuthSubmit = () => {
    fetch("http://localhost:4000/auth/signup", {
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
        setSigned(1);
      })
      .catch(err => {
        console.warn("Error Occured while signedUp", err);
        setSigned(2);
      });
  };
  const displayMessages = [
    <React.Fragment>
      {"Enter your details, already have account,please "}
      <Link to="/login">login</Link>
    </React.Fragment>,
    <React.Fragment>
      {"You are successfully signed up,please "}, <Link to="/login">login</Link>
    </React.Fragment>,
    <p style={{ color: "red" }}>Error occured , please try again...</p>
  ];
  return (
    <div className="auth-form-panel">
      <div className="auth-form-container">
        <div className="status-header">
          <label>
            <h3>{displayMessages[isSigned]}</h3>
          </label>
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
        <button onClick={handleAuthSubmit}>Sign up</button>
      </div>
    </div>
  );
};

export default SignUp;
