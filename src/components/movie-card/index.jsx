import { Link } from "react-router-dom";

import { FaStar } from "react-icons/fa";

const imagesURL = import.meta.env.VITE_IMG;

console.log(imagesURL)

const MovieCard = ({ apiResultsBest20Movies, showLink = true }) => {
  return (
    <div className="movie-card">
      <h1>posters</h1>
      <img src={imagesURL + apiResultsBest20Movies.poster_path} alt={apiResultsBest20Movies.title} />
      <h3>{apiResultsBest20Movies.title}</h3>
      <FaStar /> {apiResultsBest20Movies.vote_average}
      {showLink && <Link to={`/movie/${apiResultsBest20Movies.id}`}>Veja mais</Link>}
    </div>
  );
};

export default MovieCard;