import React from "react";
import MovieCard from "./MovieCard";
import "./styles.css";

const MovieComponent = ({ data }) => {
  return (
    <>
      <div className="bgBody">
        <h1 className="heading">List Of Cards</h1>
        <div className="cardBody">
          {data.map((val, id) => {
            return <MovieCard key={id} myData={val} />;
          })}
        </div>
      </div>
    </>
  );
};

export default MovieComponent;
