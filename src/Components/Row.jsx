import axios from "./axios";
import { useEffect, useState } from "react";

const baseImgUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchImg }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getImg() {
      const request = await axios.get(fetchImg);
      setMovies(request.data.results);
      return request;
    }
    getImg();
  }, []);

  return (
    <div>
      <h2>{title}</h2>
      <div>
        {movies.map((movie) => {
          <img src={`${baseImgUrl}${movie.poster_path}`} alt="" />;
        })}
      </div>
    </div>
  );
}

export default Row;
