import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/actors")
      .then((res) => res.json())
      .then((data) => setActors(data));
  }, []);

  const actor = actors
    ? actors.map((actorDets) => {
        const actorMovies = actorDets.movies.map((movie) => (
          <li key={movie}>{movie}</li>
        ));
        return (
          <article key={actorDets.id}>
            <h2>{actorDets.name}</h2>
            <ul>{actorMovies}</ul>
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
        <h1>Actors Page</h1>
        {actor}
      </main>
    </>
  );
}

export default Actors;
