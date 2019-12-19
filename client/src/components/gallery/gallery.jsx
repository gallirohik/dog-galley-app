import React from "react";
import "./gallery.css";
import Item from "./item/item";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadData } from "../../actions";
const Gallery = () => {
  const dogs = useSelector(state => state.dogs);
  const auth = useSelector(data => data.auth);
  console.table(auth);
  console.log("[This is form gallery] ", typeof dogs);
  const dispatch = useDispatch();
  console.log("test Dogs", dogs);
  useEffect(() => {
    fetch(`http://localhost:4000/plants/`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        dispatch(loadData(data));
      });
  }, []);
  return (
    <section className="items-gallery">
      {auth.isLogin && (
        <React.Fragment>
          <h1 className="gallery-title">This is your Collection</h1>
          <section className="items-container">
            {console.log(dogs)}
            {dogs.map(dog => (
              <Item key={dog._id} details={dog} />
            ))}
          </section>
        </React.Fragment>
      )}
    </section>
  );
};
export default Gallery;

/*

 const [dogs, setDog] = useState([
    {
      name: "Rock",
      breed: "GS",
      gender: "male",
      imgURL:
        "https://images.unsplash.com/photo-1518155317743-a8ff43ea6a5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, earum."
    },
    {
      name: "Rock",
      breed: "GS",
      gender: "male",
      imgURL:
        "https://images.unsplash.com/photo-1510074170509-3958bcb8ab3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, earum."
    },
    {
      name: "Rock",
      breed: "GS",
      gender: "male",
      imgURL:
        "https://images.unsplash.com/photo-1492873366574-4eda48d9b732?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, earum."
    },
    {
      name: "Rock",
      breed: "GS",
      gender: "male",
      imgURL:
        "https://images.unsplash.com/photo-1449439079016-e555a3a1ad6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, earum."
    },
    {
      name: "Rock",
      breed: "GS",
      gender: "male",
      imgURL:
        "https://images.unsplash.com/photo-1549775924-433bdc7ea7a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, earum."
    },
    {
      name: "Rock",
      breed: "GS",
      gender: "male",
      imgURL:
        "https://images.unsplash.com/photo-1551097295-4c28e380cdf6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, earum."
    },
    {
      name: "Rock",
      breed: "GS",
      gender: "male",
      imgURL:
        "https://images.unsplash.com/photo-1546419031-2f09ee2293d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, earum."
    },
    {
      name: "Rock",
      breed: "GS",
      gender: "male",
      imgURL:
        "https://images.unsplash.com/photo-1521309569781-7bcd429eb2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, earum."
    },
    {
      name: "Rock",
      breed: "GS",
      gender: "male",
      imgURL:
        "https://images.unsplash.com/photo-1553882809-a4f57e59501d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, earum."
    },
    {
      name: "Rock",
      breed: "GS",
      gender: "male",
      imgURL:
        "https://images.unsplash.com/photo-1496982411516-bfb7eb1c74e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, earum."
    }
  ]);
  
*/
