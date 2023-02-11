import axios from "axios";
import { useState, useEffect } from "react";

import MovieCard from "../components/MovieCard";
import BaseSpinner from "../components/ui/BaseSpinner";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMovies, setLoadedMovies] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get(
          "https://api.themoviedb.org/3/list/2?api_key=5b94a47e85b7ee4565f71d9571321016"
        )
        .then((responseData) => {
          // setIsLoading(false);
          console.log(responseData.data.items);
          setLoadedMovies(responseData.data.items);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getMovies();
  }, [setIsLoading, setLoadedMovies]);

  if (isLoading) {
    return (
      <div>
        <BaseSpinner />
      </div>
    );
  }

  return (
    <div className="row justify-content-center">
      {loadedMovies.map((movie) => {
        return <MovieCard key={movie.id} />;
      })}
    </div>
  );
}

export default HomePage;
