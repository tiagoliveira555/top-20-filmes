import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as C from "./App.styles";
import { apiKey } from "./helpers/ApiKey";
import { urlImg } from "./helpers/UrlImg";
import { Movie } from "./types/Movie";

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const api = async () => {
      await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR&page=1`
      )
        .then((response) => response.json())
        .then((data) => setMovies(data.results));
    };
    api();
  }, []);

  return (
    <C.Container>
      <C.Title>Top 20 Filmes</C.Title>
      <C.MovieList>
        {movies.map((movie) => (
          <C.MovieCard key={movie.id}>
            <Link to={`/details/${movie.id}`}>
              <C.MovieImage
                src={`${urlImg}${movie.poster_path}`}
                alt={movie.title}
              />
            </Link>
            <C.MovieTitle>{movie.title}</C.MovieTitle>
          </C.MovieCard>
        ))}
      </C.MovieList>
    </C.Container>
  );
};

export default App;
