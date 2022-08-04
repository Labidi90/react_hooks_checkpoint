import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

const Rate = ({ rating, setRating }) => {
  const handleRating = (rate) => {
    setRating(rate / 20);
  };

  return (
    <div className="Rate">
      <Rating onClick={handleRating} ratingValue={rating} />
    </div>
  );
};

export default Rate;
