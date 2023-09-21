import React from "react";
import MovieCard from "./MovieCard";
import "./styles.css";
import { Link } from "react-router-dom";

const MovieComponent = ({ data }) => {
  return (
    <>
      <div className="bgBody">
        <h1 className="heading">List Of Cards</h1>
        <div className="cardBody">
          {data.map((val, id) => {
            return <Link className="link" key={id} to={`/${val.id}`}>
              <MovieCard myData={val} />
            </Link>
          })}
        </div>
      </div>
    </>
  );
};

export default MovieComponent;
