import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
export function AddMovie() {
    
  const [name, setName] = useState("");
  const [pic, setPic] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [Trailer, setTrailer] = useState("");
  const history = useHistory();
  // const [movies, setMovies] = useState(INITIAL_MOVIES);
  const addMovie = () => {
    console.log("Adding Movies... name, pic, rating, summary");

    // const newMovie = {
    //     name: name,
    //     pic: pic,
    //     rating: rating,
    //     summary: summary,
    // }
    const newMovie = {
      name,
      pic,
      rating,
      summary,
      Trailer,
    }; //shorthand for same key:value pair
    console.log(newMovie);
    // copy the movielist and then add a new movie
    

    fetch(`https://6166c4e413aa1d00170a6711.mockapi.io/movies`, {method: "POST",

            body:JSON.stringify(newMovie),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => history.push("/movies"));


  };


  return (
    <div className="add-movie-form">
      <TextField value={name} onChange={(event) => setName(event.target.value)}
        label="Enter a Movie Name" variant="standard" />

      <TextField value={pic} onChange={(event) => setPic(event.target.value)}
        label="Enter a Pic url" variant="standard" />

      {/* <input value={pic}  onChange={(event) => setPic(event.target.value)}
                  placeholder = "Enter a Movie pic" /> */}

      <TextField value={rating} onChange={(event) => setRating(event.target.value)}
        label="Enter Rating of the Movie" variant="standard" />


      {/* <input value={rating}  onChange={(event) => setRating(event.target.value)}
                  placeholder = "Enter a Movie rating" /> */}

      <TextField value={summary} onChange={(event) => setSummary(event.target.value)}
        label="Enter Summary of the Movie" variant="standard" />

      {/* <input value={summary} onChange={(event) => setSummary(event.target.value)}
                  placeholder = "Enter a Movie summary" /> */}

      <TextField value={Trailer} onChange={(event) => setTrailer(event.target.value)}
        label="Trailer" variant="standard" />

      <Button onClick={addMovie} variant="outlined">Add a Movie</Button>

      {/* <button onClick={addMovie}> Add Movie </button> */}
      {/* <MovieList movies={movies} /> */}
      {/* <Counter/>  */}

    </div>
  );
}
