import React, { useEffect, useState } from 'react';
import './App.css';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { Switch, Route, Redirect } from 'react-router-dom';
// import { AddMovie } from './AddMovie';
// import { MovieDetails } from './MovieDetails';
 import { MovieList } from './MovieList';
 import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import { AppBar } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { MovieDetails } from './MovieDetails';
import { EditMovie } from './EditMovie';
import { AddMovie } from './AddMovie';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import InfoIcon from '@mui/icons-material/Info';






export default function App() {




  const history = useHistory(); // to update Tool bar/nav bar
  const [mode, setMode] = useState("dark");


  const theme = createTheme({
    palette:{
      mode: mode,
    },
  });



     

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={4} style={ { borderRadius: "0px", minHeight: "100vh"}}>
        <div className="App">

        <AppBar position="static" style={{marginBottom: "24px"}}>
          <Toolbar variant="dense">
            <Button variant="text" color="inherit" onClick={() => history.push('/')}>
              Home
            </Button>   
           {/* onClick = history.push used to replace the Link path to give URL in browser */}

            <Button variant="text" color="inherit" onClick={() => history.push('/movies')}>
             Movies
            </Button>

            <Button variant="text" color="inherit" onClick={() => history.push('/add-movies')}>
              Add Movies
            </Button>

            <Button 
              startIcon={
              mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />
              }
              style={ { marginLeft: "auto"}} 
              variant="text" color="inherit" onClick={() => setMode( mode === "light" ? "dark" : "light")}>
               { mode === "light" ? "dark" : "light"} mode
            </Button>

          </Toolbar>
        </AppBar>  

               {/* navbar => commented because the link movies transfered to Tool Bar */}
                {/* <nav>
                  <Link to="/">Home</Link>
                    <Link to="/movies">Movies</Link>
                    <Link to="/add-movies">Add Movies</Link>
                    </nav>   */} 
          
          <Switch>

            <Route exact path="/">
              <Welcome/>
            </Route>

            {/* now if customers search films instead of movies on our webpage, we should use "Redirect to" inside films path */}
            {/* old Route --> films --> changed to new Route movies */}
            <Route path="/films">
              <Redirect to="/movies"/>
            </Route>
            <Route path="/movies/edit/:id"><EditMovie/></Route>

            <Route path="/movies/:id">
                {/* Details */}
            <MovieDetails  />
            </Route>
            <Route path="/movies">
              <MovieList />
            </Route>
                         
            <Route path="/add-movies">
              <AddMovie />
            </Route>
             <Route path="**">
                <NotFound/></Route> 
              {/* this ** is a special link that can matches any data given */}
              

          </Switch>  

          

        </div>  

      </Paper>
    </ThemeProvider>  

            
        
    
  );
}


 export function Movie({ name, pic, rating, summary, id, deleteButton, editButton }) {

  const [show, setShow] = useState(true);
  const history = useHistory();
  // to create a button on the movie name and open a new movie description url 
  //conditional styling
  const styles = {
    color: rating < 8 ? "crimson" : "green",
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
          <h1 className="movie-name">
            {name}
            <IconButton onClick={() => {
              console.log(id);
              history.push("/movies/" + id);
            }}

              className="movie-show-button"
              aria-label="more info" color="primary"
            >
              <InfoIcon />
            </IconButton>

            {/* now add InfoIcon button from mui to take the description to seperate url */}
            <IconButton onClick={() => setShow(!show)} className="movie-show-button"
              aria-label="hide" color="primary">
              {/* <InfoIcon/> */}
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>

          </h1>
          <h1 className="movie-rating" style={styles}>⭐{rating}</h1>
        </div>
        {/* now add InfoIcon button from mui to take the description to seperate url */}
        {/* <IconButton onClick={() => setShow(!show)} className = "movie-show"
                 aria-label="hide" color="primary">
                  <InfoIcon/>
                { show ? <ExpandLessIcon /> : <ExpandMoreIcon/>}
            </IconButton> */}

        {/* <button onClick={() => setShow(!show)} className = "movie-show"> */}
        {/* {show ? "hide" : "show"} description */}
        {/* </button> */}
        {/* conditional rendering */}
        {show ? <p className="movie-summary"> {summary}</p> : ""}

        {/* <p style = {summaryStyles} className="movie-summary"> {summary}</p> */}
        <CardActions>
          <Counter /> {editButton}  {deleteButton}
        </CardActions>
      </CardContent>
    </Card>
  );
}


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

 export function Counter() {

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

