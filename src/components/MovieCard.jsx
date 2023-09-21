import React from "react";
import "./styles.css";

const MovieCard = ({ myData }) => {

  //Individual Card component of the movies which displays in the front page
  const { title, body, id } = myData;

  return (
    <>
      <div className="card">
        <div className="card_details">
          <div className="id_body">
            <div className="profile" />
            <div className="id">{id}</div>
          </div>
          <div className="card_title">{title.substr(0, 15)}</div>
          <div className="card_desc">{body.substr(0, 150)}</div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
