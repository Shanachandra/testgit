import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useParams } from 'react-router';
import { useHistory } from 'react-router';

// function Msg({ name, img, summary, imdb }) {
//   return (
//     <div>
//       <img height="300px" width="200px" src={img} alt="google.com"></img>
//       <h1 className="name">{name}</h1>
//       <p className="summary"><b>Summary: </b>{summary}</p>
//       <p className="Imdb"><b>Imdb:</b>{imdb}</p>
//       <button>Show Description</button>
//     </div>
//   );
// }
export function EditMovie({ movies, setMovies }) {
    const { id }= useParams();
    const history=useHistory();
  const [movieName, setName] = useState(movies[id].movieName);
  const [moviePic, setPoster] = useState(movies[id].moviePic);
  const [imdb, setRating] = useState(movies[id].imdb);
  const [movieSummary, setSummary] = useState(movies[id].movieSummary);
  const [trailer, setTrailer] = useState(movies[id].trailer);
  const resetMovieForm = () => {
    setName('');
    setPoster('');
    setRating('');
    setSummary('');
    setTrailer('');
  };
  const editMovie = () => {
    const updatedmovie = { movieName, moviePic, imdb, movieSummary,trailer };
    const copyMovies=[...movies];
    copyMovies[id]=updatedmovie;
    
    setMovies(copyMovies);
    history.push("/movies")
  };
  return (<div className="add-movie-form">
    <TextField value={movieName} onChange={event => setName(event.target.value)} label="Name" variant="outlined" />
    <TextField value={moviePic} onChange={event => setPoster(event.target.value)} label="Poster Url" variant="outlined" />
    <TextField value={imdb} onChange={event => setRating(event.target.value)} label="Rating" variant="outlined" />
    <TextField value={movieSummary} onChange={event => setSummary(event.target.value)} label="Summary" variant="outlined" />
    <TextField value={trailer} onChange={event => setTrailer(event.target.value)} label="Trailer" variant="outlined" />

    <Button onClick={editMovie} variant="contained" color="success">Save</Button>

  </div>);
}
