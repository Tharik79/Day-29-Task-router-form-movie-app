import React from 'react';
import { useHistory } from "react-router-dom";
import { useParams } from 'react-router-dom';
import keyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';

export function MovieDetails() {
    const history = useHistory();
    const { id } = useParams();
//   const movie = movies[id];
    const [movie, setMovie] = useState({});
 
    useEffect(() => {
        fetch( `https://6166c4e413aa1d00170a6711.mockapi.io/movies/${id}`, {method:"GET"})
        .then((data) => data.json())
        .then((mv) => setMovie(mv));
    }, []);

  console.log(movie);
  const styles = {
    color: movie.rating < 8 ? "crimson" : "green",
    fontWeight: "bold",
  };
  return (<div>
    <iframe
      width="60%"
      height="500"
      src={movie.Trailer}
      title="YouTube video player"
      frameBorder="0"
      allow="accelarometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
    <div className="movie-detail-container">
      <div className="movie-specs">
        <h3 className="movie-name">{movie.name}</h3>
        <p className="movie-rating" style={styles}>
          ⭐{movie.rating}
        </p>
      </div>
      <p className="movie-summary"> {movie.summary} </p>
      <button
        onClick={() => history.goBack()}
        variant="outlined"
        startIcon={<keyboardBackSpaceIcon />}
      >
        Back
      </button>
    </div>
  </div>
  );

}
