import { useState, useEffect } from "react";
import MovieCard from "../movie-card";

const moviesURL = import.meta.env.VITE_API_SITE;
const apiKey = import.meta.env.VITE_API_KEY;

const Best20movie = () => {
  
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const resposta = await fetch(url);
    const data = await resposta.json();

    console.log("dados do json", data);

    // pegando somente os objetos dentro do results do retorno do fetch pois o arquivo da api vem paginado

    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = moviesURL + "top_rated?" + apiKey; // ou com template string `${moviesURL}top_rated?${apiKey}`

    getTopRatedMovies(topRatedUrl);

    // console.log(topRatedUrl);
  }, []);

  return (
    <div className="container">
      <h2 className="tittle">Top 20 movies</h2>
    <div className="movies-container">
      {topMovies.lenght === 0 && <p>Estamos preparando sua lista de filmes</p>}
      {topMovies.length > 0 &&
        topMovies.map((objetoApiResults) => <MovieCard key={topMovies .id} apiResultsBest20Movies={objetoApiResults}/>)}
        </div>
    </div>
  );
};

export default Best20movie;
