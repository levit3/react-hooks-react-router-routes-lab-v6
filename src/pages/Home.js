import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  const movie = movies.map((m) => (
    <MovieCard title={m.title} id={m.id} key={m.id} />
  ));
  return (
    <>
      <header>
        {" "}
        <NavBar />
      </header>
      <h1>Home Page</h1>
      <main>{movie}</main>
    </>
  );
}

export default Home;
