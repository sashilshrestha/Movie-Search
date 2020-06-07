import React from "react";

const Searchbox = () => {
  const searchMovies = async () => {
      
  };
  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <input
          type="text"
          className="input"
          name="query"
          placeholder="Enter Movie Name"
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
    </>
  );
};

export default Searchbox;
