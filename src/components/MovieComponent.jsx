import React from "react";
import MovieCard from "./MovieCard";
import "./styles.css";
import { Link } from "react-router-dom";

const MovieComponent = ({ data }) => {

  //Here, individual movie is displayed in the grid manner. 
  //If any card will be clicked, it will redirect to that particular card details according to its id.
  
  return (
    <>
      <div className="bgBody">
        <h1 className="heading">List Of Movie Cards</h1>
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
