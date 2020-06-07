import React, { useState } from "react";
import Grade from "grade-js";

const Searchbox = () => {
  //states- input query, movies
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=b160ccc0342c77997ed7d537c11da570&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.log("Not Found");
    }

    window.addEventListener("load", function () {
      Grade(document.querySelectorAll(".cardlist"));
    });
  };
  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <input
          type="text"
          className="input"
          name="query"
          placeholder="Enter Movie Name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>

      <div className="all-movies">
        <div className="cardlist">
          {movies
            .filter((movie) => movie.poster_path)
            .map((movie) => (
              <div className="card" key={movie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                  alt={movie.title + "poster"}
                  id="card-img"
                  className=""
                />
                <div className="card-content ">
                  <h3 className="card-title">{movie.title}</h3>
                  <p>
                    <small>Release Date: {movie.release_date}</small>
                  </p>
                  <p>
                    <small>Rating: {movie.vote_average}</small>
                  </p>
                  <p className="card-desc">{movie.overview}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Searchbox;
