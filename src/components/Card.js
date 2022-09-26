import React from "react";

const Card = ({ meal }) => {
  return (
    <li className="card-meal">
      <h2>{meal.strMeal}</h2>
      <p className="origin">
        Origine : <span>{meal.strArea}</span>
      </p>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <p className="description">{meal.strInstructions}</p>
    </li>
  );
};

export default Card;
