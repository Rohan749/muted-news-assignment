import React, { useState, useEffect } from "react";
import MovieComponent from "./MovieComponent";
import Loading from "./Loading";
import ErrorDisplay from "./ErrorDisplay";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import MovieDetails from "./MovieDetails";

const Home = () => {
  const [card, setCard] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const getCardData = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      setLoading(false);
      const data = await response.json();
      setCard((prev) => [...prev, ...data]);
    } catch (error) {
      console.error(`An error occurred: ${error.message}`);
      setErrorMsg(error.message);
      setError(true);
    }
  };

  useEffect(() => {
    getCardData();
  }, [page]);

  const handelInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                error ? (
                  <ErrorDisplay errorMsg={errorMsg} />
                ) : (
                  <div>
                    <MovieComponent data={card} />
                    {loading && <Loading />}
                  </div>
                )
              }
            />
            <Route path="/:id" element={<MovieDetails />} />
          </Routes>
      </BrowserRouter>
    </>
  );
};

export default Home;
