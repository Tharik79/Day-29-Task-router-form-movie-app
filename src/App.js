import React, { useState } from 'react';
import './App.css';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InfoIcon from '@mui/icons-material/Info';
import { Switch, Route, Link, Redirect } from 'react-router-dom';


function App() {


  const INITIAL_MOVIES = [
    { name: "Home", 
     pic: "https://upload.wikimedia.org/wikipedia/en/3/36/Home_%282021_film%29.jpg",
      rating: "9",
       summary: " Oliver Twist (Indrans) wants to be tech-savvy and become a better companion to his two sons who spend more time on their phones than with their loved ones."
    },
    { name: "Shershaah",
      pic: "http://www.fridaynirvana.com/film/wp-content/uploads/2021/08/Shershaah-Movie-Review.jpg",
     rating: "8.7",
     summary: "Based on the life of Captain Vikram Batra who was an officer of the Indian Army, posthumously awarded with the Param Vir Chakra, India's highest and most prestigious award for valour, for his actions during the 1999 Kargil War in Kashmir between India and Pakistan. "
    },
   { name: "sarpatta",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxahkxswWQLCxMvZYI2OcdwfuaC6T6iXTEtw&usqp=CAU",
      rating: "8.7",
      summary:"A Sports Drama film, Set during the 1970s, the film revolves around a clash between two clans namely Sarpatta Parambarai and Idiyappa Parambarai in North Chennai, which also showcases the boxing culture in the locality and also the politics being involved in it."

    },
  { name: "Drishyam 2",
    pic: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3f/Drishyam_2.jpg/330px-Drishyam_2.jpg",
    rating: "8.6",
    summary: "Six years after the terrible event that almost destroyed his family, Georgekutty is the proud owner of a movie theater and aspiring to write and produce his own hit film."
  },

  { name: "Karnan",
    pic: "https://upload.wikimedia.org/wikipedia/en/6/62/Karnan_2021_poster.jpg",
    rating: "8.3",
    summary:"Karnan, a fearless village youth, must fight for the rights of the conservative people of his village, due to the torture given by a police officer."
  },
  { name: "Malik",
    pic: "https://upload.wikimedia.org/wikipedia/en/e/e3/Malik_film_poster.jpg",
    rating: "8.2",
    summary:"Freddy, a juvenile criminal is given the task of eliminating Sulaiman, an aging patriarch, within a time period of 14 days. An infamous smuggler and local strongman, Sulaiman also happens to be Freddy's paternal uncle."
  },
  { name: "Army of The Dead",
    pic: "https://upload.wikimedia.org/wikipedia/en/2/2c/Army_of_the_Dead_%282021_film%29.png",
    rating: 5.8,
    summary: "Following a zombie outbreak in Las Vegas, a group of mercenaries take the ultimate gamble, venturing into the quarantine zone to pull off the greatest heist ever attempted."

  },
  { name: "No Time to Die",
    pic: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fe/No_Time_to_Die_poster.jpg/330px-No_Time_to_Die_poster.jpg",
    rating: 7.5,
    summary: "James Bond has left active service. His peace is short-lived when Felix Leiter, an old friend from the CIA, turns up asking for help, leading Bond onto the trail of a mysterious villain armed with dangerous new technology."


  },
  { name: "Free Guy",
    pic:"https://upload.wikimedia.org/wikipedia/en/1/1c/Free_Guy_2021_Poster.jpg",
    rating: 7.2,
    summary: "A bank teller discovers that he's actually an NPC inside a brutal, open world video game."
  },
];

const [movies, setMovies] = useState(INITIAL_MOVIES);


// const[name, setName] = useState("");
// const[pic, setPic] = useState("");
// const[rating, setRating] = useState("");
// const[summary, setSummary] = useState("");
// const [movies, setMovies] = useState(INITIAL_MOVIES);
// const addMovie = () => { console.log("Adding Movies... name, pic, rating, summary");

// const newMovie = {
//     name: name,
//     pic: pic,
//     rating: rating,
//     summary: summary,
// }

//   const newMovie = {
//    name,
//    pic,
//    rating,
//   summary,
//   }; //shorthand for same key:value pair
// console.log(newMovie);
//  // copy the movielist and then add a new movie
// setMovies([...movies, newMovie]);
// };    

     

  return (
    <div className="App">

      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/add-movies">Add Movies</Link>
        </nav>  

          <Switch>

            <Route exact path="/">
              <Welcome/></Route>
            <Route path="/movies">
              <MovieList movies={movies} />
            </Route>
            {/* now if customers search films instead of movies on our webpage, we should use "Redirect to" inside films path */}
            {/* old Route --> films --> changed to new Route movies */}
            <Route path="/films">
              <Redirect to="/movies" />
            </Route>
            <Route path="/add-movies">
              <AddMovie movies={movies} setMovies={setMovies} />
            </Route>
             <Route path="**">
                <NotFound/></Route> 
              {/* this ** is a special link that can matches any data given */}
              

          </Switch>  

          

      </div>    
            
        
    
  );
}

export default App;


function Welcome(){
  return(
    <h2>Welcome to Thaarik's Movie React- Router Web</h2>
  )
}

function NotFound(){
  return(
    <div className="not-found-container">
      <h2>404 Not Found </h2>
      <img className="not-found-image" src="https://36bvmt283fg61unuud3h7qua-wpengine.netdna-ssl.com/wp-content/uploads/2013/03/airbnb-404.gif"
          alt="" />
    </div>
  )
}

function AddMovie({ movies, setMovies}){

  const[name, setName] = useState("");
    const[pic, setPic] = useState("");
    const[rating, setRating] = useState("");
    const[summary, setSummary] = useState("");
    // const [movies, setMovies] = useState(INITIAL_MOVIES);
    const addMovie = () => { console.log("Adding Movies... name, pic, rating, summary");

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
     }; //shorthand for same key:value pair
    console.log(newMovie);
     // copy the movielist and then add a new movie
    setMovies([...movies, newMovie]);
    };    


      return(    
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
      
          <Button onClick={addMovie} variant="outlined">Add a Movie</Button>

            {/* <button onClick={addMovie}> Add Movie </button> */}
            {/* <MovieList movies={movies} /> */}
             {/* <Counter/>  */}

        </div>    
      );
}

function MovieList({movies}){

  return(
    <section className = "movie-list">
      {movies.map(({name, pic, rating, summary}) => ( <Movie name={name} pic= {pic} rating = {rating} summary={summary}/>
      ))}
  </section>
  );
}


function Movie({ name, pic, rating, summary }) {

  const[show, setShow] = useState(true);
    //conditional styling
    const styles = { 
      color:rating <8 ? "crimson" : "green",
      fontWeight: "bold"
    };
    // const summaryStyles = {
    //   display : show ? "block" : "none",
    // };
  return (
    
    <Card className="movie-container">
      <img className="movie-pic" src={pic} alt={name} />

      <CardContent>
        <div className="movie-specs">
          <h1 className="movie-name"> {name}</h1>
          <h1 className="movie-rating" style={styles}>⭐{rating}</h1>
        </div>
          {/* now add InfoIcon button from mui to take the description to seperate url */}
          <IconButton onClick={() => setShow(!show)} className = "movie-show"
            aria-label="hide" color="primary">
              <InfoIcon/>
           { show ? <ExpandLessIcon /> : <ExpandMoreIcon/>}
          </IconButton>

        {/* <button onClick={() => setShow(!show)} className = "movie-show"> */}
        {/* {show ? "hide" : "show"} description */}
        {/* </button> */}
        {/* conditional rendering */}
        {show ? <p className="movie-summary"> {summary}</p>: ""}

        {/* <p style = {summaryStyles} className="movie-summary"> {summary}</p> */}
        <CardActions>
            <Counter />
        </CardActions>    
      </CardContent>
    </Card>
  );
}


function Counter() {

  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  const incrementLike= () => setLike(like+1);
  return (
    <div className="counter-container">
      <IconButton className="likes-dislikes" 
        onClick={incrementLike}
        aria-label="delete" color="primary">

          <Badge badgeContent={like} color="primary">
            👍 
          </Badge>
      
      </IconButton>

      {/* <button className="likes-dislikes" onClick={() => setLike(like + 1)}> 👍 {like}</button> */}
      
      <IconButton className="likes-dislikes" 
        onClick={() => setDisLike(disLike + 1)}
        aria-label="delete" color="error">
        👎 {disLike}
      </IconButton>

      {/* <button className="likes-dislikes" onClick={() => setDisLike(disLike + 1)}>👎 {disLike}</button> */}
      
    </div>
  );
}

