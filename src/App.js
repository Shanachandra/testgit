import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { ColorBox } from './ColorBox';
import { ColorList } from './ColorList';
import { MovieList } from './MovieList';
import { Movie } from './Movie';
import { AddMovie } from './AddMovie';
import { EditMovie } from './EditMovie';
import { useParams } from 'react-router';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import { useHistory } from 'react-router';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { ThemeProvider, useTheme, createTheme } from '@mui/material/styles'
import Paper from '@mui/material/Paper';
import HomeIcon from '@mui/icons-material/Home';
import TheatersIcon from '@mui/icons-material/Theaters';
import AddIcon from '@mui/icons-material/Add';
import PaletteIcon from '@mui/icons-material/Palette';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';


function App() {
  const intial_movies = [
    {
      movieName: "The Pursuit of Happiness",
      moviePic: "https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/thepursuitofhappyness_onesheet_1400x2100.png?itok=BSpvsOsJ",
      movieSummary: "Tired of Chris's professional failures, his wife decides to separate, leaving him financially broke with an unpaid internship in a brokerage firm and his son's custody to deal with.",
      imdb: "8",
      trailer:"https://www.youtube.com/embed/DMOBlEcRuw8"
    },
  
    {
      movieName: "The Imitation Game",
      moviePic: "https://m.media-amazon.com/images/M/MV5BOTgwMzFiMWYtZDhlNS00ODNkLWJiODAtZDVhNzgyNzJhYjQ4L2ltYWdlXkEyXkFqcGdeQXVyNzEzOTYxNTQ@._V1_.jpg",
      movieSummary: "Alan Turing, a British mathematician, joins the cryptography team to decipher the German enigma code. With the help of his fellow mathematicians, he builds a machine to crack the codes.",
      imdb: "8",
      trailer:"https://www.youtube.com/embed/nuPZUUED5uk"
    },
    {
      movieName: "Matrix",
      moviePic: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
      movieSummary: "Thomas Anderson, a computer programmer, is led to fight an underground war against powerful computers who have constructed his entire reality with a system called the Matrix.",
      imdb: "8.7",
      trailer:"https://www.youtube.com/embed/9ix7TUGVYIo"
    },
    {
      movieName: "Intersterllar",
      moviePic: "https://pbs.twimg.com/media/EmUeXUZVcAA5v6j.jpg",
      movieSummary: "When  Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
      imdb: "8.6",
      trailer:"https://www.youtube.com/embed/zSWdZVtXT7E"
    },
    {
      movieName: "Ice Age",
      moviePic: "https://lumiere-a.akamaihd.net/v1/images/p_iceage_21384_4689eb31.jpeg?region=0%2C0%2C540%2C810",
      movieSummary: "Manny the mammoth, Sid the loquacious sloth, and Diego the sabre-toothed tiger go on a comical quest to return a human baby back to his father, across a world on the brink of an ice age.",
      imdb: "7.5",
      trailer:"https://www.youtube.com/embed/i4noiCRJRoE"
    }
  ];
  const [movies, setMovies] = useState(intial_movies);
  return (
    
    <div className="App"> 
    {/* <AddMovie /> */}
    
    <BasicExample movies={movies} setMovies={setMovies}/>
      {/* {movies.map((movie) => (
        <Msg
          name={movie.movieName}
          img={movie.moviePic}
          summary={movie.movieSummary}
          imdb={movie.imdb}
        />
      ))} */}
{/* <ColorList />
      <ColorBox /> */}
    </div>
  );
}
// function AddMovie()
// {
  
//   const [name, setName]=useState("");
//   const [url, setUrl]=useState("");
//   const [summary, setSummary]=useState("");
//   const [rating, setRating]=useState("");

//   return(
//   <div className="inputimg">
   
//   <input     
//       placeholder="Movie Name"
//       onChange={(event) =>setName(event.target.value)
//       }
//           />  
//               <input     
//       placeholder="Movie img url"
//       onChange={(event) =>setUrl(event.target.value)
//       }
//           />   
//               <input     
//       placeholder="summary"
//       onChange={(event) =>setSummary(event.target.value)
//       }
//           />  
//               <input     
//       placeholder="Rating"
//       onChange={(event) =>setRating(event.target.value)
//       }
//           />  
          
//         <button onClick={()=>{          
//           <Movie         
//           name={name}
//           poster={url}
//           rating={rating}
//           summary={summary} />
//         }}>Add Movie</button>
//   </div>
//   )
  
// }
function Welcome()
{
  return(
    <div>
      <h1>Welcome All</h1>
      </div>
  )
}
function BasicExample({movies,setMovies}) {
  const [mode,setMode]=useState("light");
  const history=useHistory();
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={theme}>
<Paper style={{minHeight:"100vh"}} elevation={3}>
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
      
        <Toolbar>
        <Button startIcon={<HomeIcon />} onClick={()=>history.push("/")} color="inherit">Home</Button>
        <Button startIcon={<TheatersIcon />} onClick={()=>history.push("/movies")}color="inherit">Movies</Button>
        <Button startIcon={<AddIcon />} onClick={()=>history.push("/movies/add")} color="inherit">AddMovies</Button>
        <Button startIcon={<PaletteIcon />}  onClick={()=>history.push("/colorbox")} color="inherit">ColorGame</Button>
        <Button startIcon={mode==="light"?<Brightness4Icon />:<BrightnessHighIcon />} onClick={()=>setMode(mode==="light"?"dark":"light")} style={{marginLeft:"auto"}} color="inherit">{mode==="light"?"dark":"light"} Mode</Button>

        </Toolbar>
        </AppBar>
        </Box>
        <Switch>
        {/* Each route is case, eg. - case '/about': */}
        <Route exact path="/">
          <Welcome />
         </Route>

        <Route path="/films">
          <Redirect to="/movies" />
          {/* Matcht url display the below component */}          
          </Route>

          <Route path="/movies/add">
          <AddMovie movies={movies} setMovies={setMovies} />
          </Route>

          <Route path="/movies/edit/:id">
          <EditMovie movies={movies} setMovies={setMovies} />
          </Route>

          <Route path="/movies/:id">
          <MovieDetail movies={movies} />
          </Route>         

          {/* <Route exact path="/movies/:id/:name/:poster/:rating/:summary/:trailer">
          <EditMovie movies={movies} />
          </Route> */}

          <Route path="/movies">
          {/* Matcht url display the below component */}
          <MovieList movies={movies} setMovies={setMovies} />          
        </Route>

        <Route path="/colorbox">
          <ColorList />
        </Route>
        
        <Route path="**">
        <NotFound />
        </Route>
      </Switch>
      
      {/* <ul>
      
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/movies/add">Add Movies</Link>
        </li>
        <li>
          <Link to="/colorbox">Color Box</Link>
        </li>
       
      </ul> */}
      

      

      {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
     
    </div>
    </Paper>
    </ThemeProvider>
  );
}
function MovieDetail({movies})
{
  const {id}=useParams()
  
  const mov=movies[id]
  const history=useHistory();
  return(
    <div>
       <IconButton onClick={()=>history.goBack()} color="primary" aria-label="Movie details">
              <ArrowBackIcon /> Back 
            </IconButton>
       <iframe width="100%" height="506" src={mov.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       <div  className="movie-detail-container">
       <div className="movie-specs">
          <h3 className="movie-name">{mov.movieName}</h3>
           
          <p className="movie-rating">???{mov.imdb}</p>
        </div>
        <p>{mov.movieSummary}</p>
       </div>
    </div>
  )
}
function NotFound()
{
  return(
    <div>
      <h1 className="not-found">404</h1>
      <img src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" alt=""></img>
     </div>
  )
}
function Home() {
  return (
    <div>
      <h2>Home, Welcome All!!!</h2>
      {/* <TableComp /> */}
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About, this nice!!!</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}


export default App;
