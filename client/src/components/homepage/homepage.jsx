import React, { useState, useEffect } from "react";
import "./homepage.css";
import { useSelector, useDispatch } from "react-redux";
import { addDog, updateDog } from "../../actions";
const Home = () => {
  const defaultImage =
    "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";
  const [currentImg, setCurrentImg] = useState(defaultImage);
  const oldData = useSelector(data => data.oldData);
  const auth = useSelector(data => data.auth);
  console.table(auth);
  const defaultData = {
    name: "",
    breed: "",
    origin: "",
    gender: "",
    description: ""
  };
  const [dogData, setDogData] = useState(defaultData);
  useEffect(() => {
    if (oldData.hasOldData) {
      const { name, breed, origin, gender, description, imgURL } = oldData.data;
      setDogData({
        name,
        breed,
        origin,
        gender,
        description
      });
      setCurrentImg(`http://localhost:4000${imgURL}`);
    }
  }, [oldData.hasOldData === true, oldData.data]);
  console.log("[old data from home page]", oldData);

  const [uploadedImage, setUploadedImage] = useState({});
  const [isUploaded, setIsUploaded] = useState(false);
  const [newDog, setNewDog] = useState({});
  const dispatch = useDispatch();
  const handleForm = event => {
    const { name, value } = event.target;
    setDogData({ ...dogData, [name]: value });
    console.table(dogData);
  };
  const handleImageUpload = event => {
    setUploadedImage({ image: event.target.files[0] });
    console.table(uploadedImage);
  };
  const handleAdd = () => {
    console.log(uploadedImage);
    const h = {}; //headers
    let data = new FormData();
    const { name, breed, origin, gender, description } = dogData;
    data.append("avatar", uploadedImage.image);
    data.append("name", name);
    data.append("breed", breed);
    data.append("origin", origin);
    data.append("gender", gender);
    data.append("description", description);
    console.log(name, gender, origin, breed, description);
    h.Accept = "application/json"; //if you expect JSON response
    fetch("http://localhost:4000/plants", {
      method: "POST",
      headers: h,
      body: data
    })
      .then(response => response.json())
      .then(data => {
        setIsUploaded(true);
        setNewDog(data);
        console.log(data);
        dispatch(addDog(data));
        setCurrentImg(`http://localhost:4000${data.imgURL}`);
      })
      .catch(err => {
        console.log(err);
      });
    setDogData(defaultData);
    setCurrentImg(defaultImage);
  };
  const handleUpdate = () => {
    const h = {}; //headers
    let data = new FormData();
    const { name, breed, origin, gender, description } = dogData;
    data.append("avatar", uploadedImage.image);
    data.append("name", name);
    data.append("breed", breed);
    data.append("origin", origin);
    data.append("gender", gender);
    data.append("description", description);
    console.log(name, gender, origin, breed, description);
    h.Accept = "application/json"; //if you expect JSON response
    fetch(`http://localhost:4000/plants/${oldData.data._id}`, {
      method: "POST",
      headers: h,
      body: data
    })
      .then(response => response.json())
      .then(data => {
        console.log("[Response from Update]", data);
        dispatch(updateDog(data));
        setCurrentImg(`http://localhost:4000${data.imgURL}`);
      })
      .catch(err => {
        console.log(err);
      });
    setDogData(defaultData);
    setCurrentImg(defaultImage);
  };
  const handleSubmit = () => {
    oldData.hasOldData ? handleUpdate() : handleAdd();
  };
  return (
    <div id="home" className="home-container">
      <div className="content">
        <article className="home-page-content">
          <h1>Dogs Gallery</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, culpa
          fuga nostrum aliquam, veritatis facilis velit maxime mollitia harum
          nisi laudantium! Sint illo culpa officiis?
        </article>
      </div>

      <div className="form-container">
        {auth.isLogin && (
          <div className="dog-form">
            <input
              name="name"
              type="text"
              value={dogData.name}
              placeholder="Name"
              onChange={handleForm}
              required
            />
            <input
              name="breed"
              type="text"
              value={dogData.breed}
              placeholder="Breed"
              onChange={handleForm}
            />
            <input
              name="origin"
              type="text"
              value={dogData.origin}
              placeholder="Origin"
              onChange={handleForm}
            />
            <input
              name="gender"
              type="text"
              value={dogData.gender}
              placeholder="Gender"
              onChange={handleForm}
            />
            <textarea
              name="description"
              value={dogData.description}
              maxLength={100}
              placeholder="Description"
              onChange={handleForm}
            />
            <input type="file" onChange={handleImageUpload}></input>

            <button onClick={handleSubmit}>
              {oldData.hasOldData ? "Update" : "Add"}
            </button>
          </div>
        )}
        <img className="responsive" src={currentImg} alt="Pupp image" />
      </div>
    </div>
  );
};
/*
<input type="file" onChange={handleImageUpload}></input>
      <button onClick={handleUpload}>Upload</button>
      <button onClick={handleShowUpload}>Show Uploaded image</button>
      {showImage && <img src={"http://localhost:4000" + resPlant.imgURL}></img>}
*/
export default Home;
