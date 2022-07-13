import * as C from "./styles";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { apiKey } from "../../helpers/ApiKey";
import { urlImg } from "../../helpers/UrlImg";
import { Movie } from "../../types/Movie";
import { formatData } from "../../helpers/formatData";

export const Details = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    const api = async () => {
      await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=pt-BR`
      )
        .then((response) => response.json())
        .then((data) => {
          setMovie(data);
        });
    };
    api();
  }, []);

  return (
    <C.Container>
      <C.Image src={`${urlImg}${movie?.poster_path}`} alt="" />
      <C.InfoArea>
        <C.Info>
          <C.Title>Título:</C.Title>
          <C.InfoMovie>{movie?.title}</C.InfoMovie>
        </C.Info>
        <C.Info>
          <C.Title>Sinopse:</C.Title>
          <C.InfoMovie>{movie?.overview}</C.InfoMovie>
        </C.Info>
        <C.Info>
          <C.Title>Data de Lançamento:</C.Title>
          <C.InfoMovie>{formatData(movie?.release_date)}</C.InfoMovie>
        </C.Info>
        <Link to="/">
          <C.Button>Voltar</C.Button>
        </Link>
      </C.InfoArea>
    </C.Container>
  );
};
