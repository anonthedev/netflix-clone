import axios from "./axios";
import { useState, useEffect } from "react";
import requests from "./Requests";
import "./Banner.css";

const bannerUrl = "https://image.tmdb.org/t/p/original/";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function getBanner() {
      const request = await axios.get(requests.fetchOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * (request.data.results.length - 0) + 0)
        ]
      );
      return request;
    }
    getBanner();
  }, []);

  console.log(movie);

  return (
    <section
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("${bannerUrl}${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-info">
        <div className="banner-head">
          <h2>{movie?.title || movie?.name || movie?.original_name}</h2>
        </div>
        <div className="banner-btns">
          <button>Play</button>
          <button>My List</button>
        </div>
        <div className="banner-desc">
          <p>{movie?.overview}</p>
        </div>
      </div>

      <div className="bannner-bottom"></div>
    </section>
  );
}

export default Banner;
