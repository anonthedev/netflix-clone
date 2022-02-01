import axios from "./axios";
import { useEffect, useState } from "react";
import "./Row.css"

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
    <div className="row">
      <h2>{title}</h2>
      <div className="row-img">
        {movies.map((movie) => (
          <img key={movie.id} src={`${baseImgUrl}${movie.poster_path}`} alt="" />
        ))}
      </div>
    </div>
  );
}

export default Row;
