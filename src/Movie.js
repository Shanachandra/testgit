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
import Button from '@mui/material/Button';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';

export function Movie({ name, poster, rating, summary, trailer, id, movies, setMovies}) {
  const [show, setShow] = useState(true);
  const history=useHistory();
const removeitem=(moveis,id)=>{  
 let newarray=moveis.splice(id,1) 
 return moveis
}
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
        <IconButton className="movie-edit-button" color="secondary" aria-label="Editicon" style={{marginLeft:"auto"}}
         onClick={()=>history.push("/movies/edit/"+id)}><EditIcon /> </IconButton>
        <IconButton className="movie-delete-button" color="error" aria-label="deleteicon" onClick={()=>{
                const remainingmovies= movies.filter((mv,index)=>index!=id)
                setMovies(remainingmovies)
        }}><DeleteOutlineIcon /> </IconButton>
       
      </CardActions>

    </Card>
  );
}



// const removeitem=(moveis,id)=>{  
//   let newarray=moveis.splice(id,1) 
//   return moveis
//  }
//  onClick={()=>setMovies(removeitem(movies,id))}
 



