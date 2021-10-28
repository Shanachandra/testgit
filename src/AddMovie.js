import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

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
export function AddMovie({ movies, setMovies }) {
  const [movieName, setName] = useState('');
  const [moviePic, setPoster] = useState('');
  const [imdb, setRating] = useState('');
  const [movieSummary, setSummary] = useState('');
  const resetMovieForm = () => {
    setName('');
    setPoster('');
    setRating('');
    setSummary('');
  };
  const addMovie = () => {
    const newmovie = { movieName, moviePic, imdb, movieSummary };
    setMovies([...movies, newmovie]);
    resetMovieForm();
  };
  return (<div className="add-movie-form">
    <TextField value={movieName} onChange={event => setName(event.target.value)} label="Name" variant="outlined" />
    <TextField value={moviePic} onChange={event => setPoster(event.target.value)} label="Poster Url" variant="outlined" />
    <TextField value={imdb} onChange={event => setRating(event.target.value)} label="Rating" variant="outlined" />
    <TextField value={movieSummary} onChange={event => setSummary(event.target.value)} label="Summary" variant="outlined" />

    <Button onClick={addMovie} variant="contained">Add Movie</Button>

  </div>);
}
