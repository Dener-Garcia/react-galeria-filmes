import React from "react";
import { Link } from "react-router-dom";

const moviesURL = import.meta.env.VITE_API_SITE;
const apiKey = import.meta.env.VITE_API_KEY;
const imageUrl = import.meta.env.vite_img;



import { FaStar } from "react-icons/fa";

console.log("Imagens do card", imageUrl.poster_path);

const Card = ({ movie, showLink = true }) => {
  return (
    <div className="movie-card">
      <h2>Movie Card</h2>
      <img src={imageUrl + movie.poster_path} alt={movie.title} />
      <h3>{movie.title} </h3>
      <span>
        <FaStar /> {movie.vote_average}{" "}
      </span>
      <button>
        {showLink && <Link to={`/movie/${movie.id}`}>Veja mais</Link>}
      </button>
    </div>
  );
};

export default Card;
