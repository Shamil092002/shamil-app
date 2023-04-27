import React from "react";
import ReviewCard from "./components/ReviewCard/ReviewCard";

const reviews = [
  {
    name: "Guy Hawkins",
    text: "Minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi ",
  },
  {
    name: "Esther Howard",
    text: "Minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut ",
  },
  {
    name: "Anonim",
    text: "Minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis ",
  },
  {
    name: "Jacob Jones",
    text: "Minima veniam, quis nostrum exercitationem ullam laboriosam, nisi ut aliquid ex ea  ",
  },
];

const Main = () => {
  return (
    <div>
      {reviews.map((item) => (
        <ReviewCard name={item.name} text={item.text} />
      ))}
    </div>
  );
};

export default Main;
