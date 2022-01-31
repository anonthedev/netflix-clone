import axios from "./axios";
import { useState, useEffect } from "react";
import requests from "./Requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function getBanner() {
      const request = await axios.get(requests.fetchOriginals);
      setMovie(request.data.results[0]);
      return request;
    }
    getBanner();
  }, []);

console.log(movie)

  return (
    <section
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    ></section>
  );
}

export default Banner;
