import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/directors")
      .then((res) => res.json())
      .then((data) => setDirectors(data));
  });

  const director = directors
    ? directors.map((directorDets) => {
        const directorMovies = directorDets.movies.map((movie) => (
          <li key={movie}>{movie}</li>
        ));
        return (
          <article key={directorDets.id}>
            <h2>{directorDets.name}</h2>
            <ul>{directorMovies}</ul>
          </article>
        );
      })
    : null;
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {director}
      </main>
    </>
  );
}

export default Directors;
