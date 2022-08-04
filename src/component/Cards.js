import React from "react";
import card from "./Cards";

const Cards = (props) => {
  return (
    <div className="cards">
      <div className="cart">
        <img src={props.card.posterurl} />
        <h1>{props.card.name}</h1>
        <p> {props.card.description} </p>
        <h3>{props.card.rating}</h3>
      </div>
      <div className="overview">
        <h1>overview</h1>
        this film is dedicated to any one love the cinema or any one have a time
        for a cinema movie.
      </div>
    </div>
  );
};

export default Cards;
