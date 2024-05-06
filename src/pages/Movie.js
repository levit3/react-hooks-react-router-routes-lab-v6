import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {
  const params = useParams();
  const movieId = params.id;
  const [movieDetails, setMovieDetails] = useState({});
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/movies/${movieId}`)
      .then((res) => res.json())
      .then((data) => {
        setMovieDetails(data);
        setGenres(data.genres);
      });
  }, [movieId]);

  const genre = genres ? genres.map((g) => <span key={g}>{g}</span>) : null;
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movieDetails.title}</h1>
        <p>{movieDetails.time}</p>
        {genre}
      </main>
    </>
  );
}

export default Movie;
