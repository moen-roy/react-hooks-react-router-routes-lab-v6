import { useParams } from "react-router-dom";

const movieDetails = {
  1: {
    title: "Doctor Strange",
    time: "115",
    genres: ["Action", "Adventure", "Fantasy"],
  },
};

export default function MoviePage() {
  const { id } = useParams();
  const movie = movieDetails[id];

  if (!movie) return <h1>Oops! Movie not found.</h1>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.time}</p>
      
      {movie.genres.map((genre) => (
        <span key={`first-${genre}`}>{genre}</span>
      ))}
      {movie.genres.map((genre) => (
        <span key={`second-${genre}`}>{genre}</span>
      ))}
    </div>
  );
}