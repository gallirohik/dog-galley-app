import React from "react";
import "./navbar.css";
import logo from "../../images/logo.jpg";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import userPic from "../../images/userPic.png";
import { loggedOut } from "../../actions";
const Navbar = () => {
  const auth = useSelector(data => data.auth);
  console.table(auth);
  const dispatch = useDispatch();
  return (
    <nav className="navbar">
      <span className="logo">
        <img src={logo} alt="" height="70" width="70" />
      </span>
      <ul className="nav-items">
        {!auth.isLogin ? (
          <li className="nav-item">
            <button>
              <Link to="/login">Login / signup</Link>
            </button>
          </li>
        ) : (
          <ul className="profile nav-items">
            <li>
              <img className="profile-pic-small" src={userPic} alt="ppic" />
            </li>
            <li>
              <label>{auth.userInfo.userName}</label>
            </li>
            <button onClick={() => dispatch(loggedOut())}>logout</button>
          </ul>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
