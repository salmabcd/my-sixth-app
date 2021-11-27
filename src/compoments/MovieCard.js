import React from "react";
import Button from "./Button";

const MovieCard = (props) => {
  const { title, description, imageUrl } = props.movie;
  return (
    <div className="card">
      <img src={imageUrl} width="300px" alt="movie" />
      <h2>{title}</h2>
      <p>{description}</p>
      <Button onClick={props.onClick} />
      
    </div>
  );
};

export default MovieCard;
