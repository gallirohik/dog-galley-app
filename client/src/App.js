import React from "react";
import "./App.css";
import NavBar from "./components/navbar/navbar";
import Home from "./components/homepage/homepage";
import Gallery from "./components/gallery/gallery";
import SignUp from "./components/auth/signup";
import Login from "./components/auth/login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={MainContent} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
};

const MainContent = () => (
  <React.Fragment>
    <Home />
    <Gallery />
  </React.Fragment>
);

export default App;

/*
 <input type="file" onChange={handleImageUpload}></input>
      <button onClick={handleUpload}>Upload</button>
      <button onClick={handleShowUpload}>Show Uploaded image</button>
      {showImage && <img src={"http://localhost:4000" + resPlant.imgURL}></img>}
*/
