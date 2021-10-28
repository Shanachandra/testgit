import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Counter } from "./Counter";
import InfoIcon from '@mui/icons-material/Info';
import { useHistory } from 'react-router';

export function Movie({ name, poster, rating, summary, id}) {
  const [show, setShow] = useState(true);
  const history=useHistory();

  const styles = { display: show ? "block" : "none" };
  return (
    <Card className="movie-container">

      <img className="movie-poster" src={poster} alt={name} />
      <CardContent>
        <div className="movie-specs">
          <h3 className="movie-name">{name}
          <IconButton onClick={()=>history.push("/movies/"+id)} color="primary" aria-label="Movie details">
              <InfoIcon />
            </IconButton>
            <IconButton color="primary" onClick={() => setShow(!show)} aria-label={show ? "Hide" : "Show"}>
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton></h3>
          <p className="movie-rating">⭐{rating}</p>
        </div>

        {/* <button onClick={()=>setShow(!show)} className="movie-show-button">{show ? "Hide" : "Show"} Description</button> */}
        <p style={styles}>{summary}</p>

      </CardContent>
      <CardActions>
        <Counter />
      </CardActions>

    </Card>
  );
}
