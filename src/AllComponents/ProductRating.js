import React from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { FaStarHalfAlt } from "react-icons/fa";

export const ProductRating = ({ rating }) => {
  const getStar = Array.from({ length: 5 }, (i, index) => {
    const fullNumbers = 1 + index;
    const halfNumbers = 0.5 + index;
    return (
      <span className="star-icon" key={index}>
        {rating >= fullNumbers ? (
          <AiFillStar />
        ) : rating >= halfNumbers ? (
          <FaStarHalfAlt />
        ) : (
          <AiOutlineStar />
        )}
      </span>
    );
  });
  return <p>{getStar}</p>;
};
