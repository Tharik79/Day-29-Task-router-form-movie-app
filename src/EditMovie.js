import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory,  useParams } from 'react-router-dom';

export function EditMovie() {

    //const history = useHistory();
    const {id} = useParams();
  //const movie = movies[id];
  
  const [movie, setMovie] = useState(null);
 
    useEffect(() => {
        fetch( `https://6166c4e413aa1d00170a6711.mockapi.io/movies/${id}`, {method:"GET", })
        .then((data) => data.json())
        .then((mv) => setMovie(mv));
    }, []);

  
        // only show the update movie when the data is available.
        return movie ? <UpdateMovie movie={movie} /> : "";
}

function UpdateMovie({movie}){

    const [name, setName] = useState(movie.name);
  const [pic, setPic] = useState(movie.pic);
  const [rating, setRating] = useState(movie.rating);
  const [summary, setSummary] = useState(movie.summary);
  const [Trailer, setTrailer] = useState(movie.Trailer);
   
  const history = useHistory();
  const editMovie = () => {
    
     const updatedMovie = {
      name,
      pic,
      rating,
      summary,
      Trailer,
    }; //shorthand for same key:value pair
    console.log(updatedMovie);

    // 1. method -> PUT
    // 2. Body - data and JSON and pass id as params
    // 3. headers -> JSON

    fetch(`https://6166c4e413aa1d00170a6711.mockapi.io/movies/${movie.id}`, {
      method: "PuT",

            body:JSON.stringify(updatedMovie),
            headers: {
                'Content-Type': 'application/json'
            },
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
    
          <Button onClick={editMovie} variant="outlined">Save</Button>
    
          {/* <button onClick={addMovie}> Add Movie </button> */}
          {/* <MovieList movies={movies} /> */}
          {/* <Counter/>  */}
    
        </div>
      );

}