import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { FaStar } from "react-icons/fa";

const moviesURL = import.meta.env.VITE_API_SITE;
const apiKey = import.meta.env.VITE_API_KEY;
const imageUrl = import.meta.env.vite_img;


const Card = ({ movie, showLink = true }) => {

  const [cardsMovies, setCardsMovies] = useState([])

  const getCards = async (url) => {
    const resposta = await fetch (url)
    const data = await resposta.json()
    setCardsMovies(data.results)

    console.log("funcao async getCards", data.results)
  }

  useEffect(() => {
    const topCards = moviesURL + "top_rated?" + apiKey

    getCards(topCards)

    console.log("chamada da api com string montada", topCards)
  }, [])

  return (
    <div className="movie-card">
      <h3>Grade filmes</h3>
      <img src= {imageUrl + movie.poster_path} />
      <h3>{movie.title}</h3>
      <h2>Movie Card</h2>
      <p><FaStar/>  {movie.vote_average}</p>
      {showLink && <Link to={"/movie/" + "movie.id"}>Detalhes</Link>}
      <div className="movies-container">
      {cardsMovies.lenght === 0 && <p>Estamos preparando sua lista de filmes</p>}
      {cardsMovies.length > 0 &&
        cardsMovies.map((objetoApiResults) => <p>{objetoApiResults.poster_path}</p>)}
        </div>
    </div>
  );
};

export default Card;
