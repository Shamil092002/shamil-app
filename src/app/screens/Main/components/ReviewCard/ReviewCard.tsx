import React from "react";
import stars from "../../../../../assets/images/stars.svg";
import "./style.css";

const ReviewCard = (props: any) => {
  const { name, text } = props;
  return (
    <div className="content-1">
      <img src={stars} alt="stars" />
      <div className="textbox">
        <h3>{name}</h3>
        <p>{text} </p>
      </div>
    </div>
  );
};

export default ReviewCard;
