import React from 'react';
import IconButton from '@mui/material/IconButton';
import { useHistory } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Movie } from './App';
import  { useEffect, useState } from 'react';
// export default App;
export function MovieList() {

    const [movies, setMovies] = useState([]);
    //APP IS MOUNTED -> useEffect only once -> fetch -> setMovies
    
    const getMovies = () => {
        fetch("https://6166c4e413aa1d00170a6711.mockapi.io/movies", {method: "GET",
       })
        .then((data) => data.json())
        .then((mvs) => setMovies(mvs));
    };
    useEffect(getMovies, []);

      const deleteMovie = (id) => {
        fetch( `https://6166c4e413aa1d00170a6711.mockapi.io/movies/${id}`, {method:"DELETE", } 
        ).then(() => getMovies());
      };

    const history = useHistory();
  return (
    <section className="movie-list">
      {movies.map(({ name, pic, rating, summary, id }) => (
        <Movie 
        key={id}
        name={name} pic={pic} rating={rating} summary={summary} id={id}
          deleteButton={<IconButton onClick={() => deleteMovie(id) }


            className="movie-show-button"
            aria-label="delete movie" color="error"
          >
            <DeleteIcon />   
          </IconButton>}
          editButton={<IconButton
            onClick={() => history.push("/movies/edit/" + id)}

            className="movie-show-button"
            aria-label="edit button" color="secondary"
          >
            <EditIcon />
          </IconButton>} />


      ))}
    </section>
  );
}
