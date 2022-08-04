import React, { useState } from "react";
import AddFilm from "./AddFilm";
import "./style.css";
import Rate from "./Rate";

const Navbar = ({
  addF,
  searsh,
  setsearsh,
  handleSearch,
  AddFilms,
  rating,
  setRating,
}) => {
  const [films, setfilms] = useState({
    name: "",
    posterurl: "",
    description: "",
  });
  return (
    <div className="navbar">
      <nav className="list">
        <ul>
          <li>
            <a href="#">Popular</a>
          </li>
          <li>
            <a href="#">Anime</a>
          </li>
          <li>
            <a href="#">Drama</a>
          </li>
          <li>
            <a href="#">Comedie</a>
          </li>
        </ul>
      </nav>
      <Rate setRating={setRating} rating={rating} />
      <form className="formstyle">
        <div className="recherche">
          <input
            type="text"
            placeholder="Enter Movie Name"
            className="input-text"
            onChange={(e) => {
              setsearsh(e.target.value);
              handleSearch();
            }}
          />

          <button>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <AddFilm AddFilms={AddFilms} />
      </form>
    </div>
  );
};

export default Navbar;
