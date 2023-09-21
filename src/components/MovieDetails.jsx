import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from './Loading';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error(`An error occurred: ${error.message}`);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div className='detailBody'>
        <Loading />
    </div>;
  }

  return (
    <div className="detailBody">
      <h1 className="heading">Movie Details</h1>
      <div className='description'>
        <h1>ID: {id}</h1>
        <h2 className='title'>Title: {movie.title}</h2>
        <p>{movie.body}</p>
      </div>
    </div>
  );
};

export default MovieDetails;