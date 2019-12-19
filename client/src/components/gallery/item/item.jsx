import React, { useState } from "react";
import "./item.css";
import { useDispatch } from "react-redux";
import { removeDog } from "../../../actions/";
import { loadOld } from "../../../actions";
import LazyLoad from "react-lazyload";
const Loading = () => <div className="loading-card-container"></div>;
const Item = props => {
  const [showOps, setShowOps] = useState(false);
  const { _id, name, breed, gender, imgURL, description } = props.details;
  const handleShowOps = status => {
    setShowOps(status);
  };
  const dispatch = useDispatch();
  const handleUpdate = () => {
    console.log("[updating at item.jsx]", props.details);
    dispatch(loadOld(props.details));
    window.location.assign("#home");
  };
  const handleRemove = () => {
    const requestOptions = {
      method: "DELETE"
    };
    fetch(`http://localhost:4000/plants/${_id}`, requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log("[Removed DOG]", data);
        dispatch(removeDog(_id));
      })
      .catch(err => {
        console.log("[error occured while removing dog]", err);
      });
  };
  return (
    <LazyLoad once={true} placeholder={<Loading />}>
      <div
        className="card"
        onMouseOver={() => handleShowOps(true)}
        onMouseLeave={() => handleShowOps(false)}
      >
        {showOps && (
          <div className="card-header">
            <i onClick={handleUpdate} className="fa fa-pencil"></i>
            <i onClick={handleRemove} className="fa fa-trash-o"></i>
          </div>
        )}

        <LazyLoad once={true} placeholder={<Loading />}>
          <img
            className="picture"
            src={`http://localhost:4000${imgURL}`}
            alt="Avatar"
          />
        </LazyLoad>
        <div className="container">
          <h4>
            <b>{name}</b>
          </h4>
          <p>{`Breed : ${breed}`}</p>
          <p>{`Gender : ${gender}`}</p>
          <p>{description}</p>
        </div>
      </div>
    </LazyLoad>
  );
};
export default Item;
