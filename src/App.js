import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const movies = [
  {
    movieName: "The Pursuit of Happiness",
    moviePic:
      "https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/thepursuitofhappyness_onesheet_1400x2100.png?itok=BSpvsOsJ",
    movieSummary:
      "Tired of Chris's professional failures, his wife decides to separate, leaving him financially broke with an unpaid internship in a brokerage firm and his son's custody to deal with.",
    imdb: "8"
  },

  {
    movieName: "The Imitation Game",
    moviePic:
      "https://m.media-amazon.com/images/Mnpm/MV5BOTgwMzFiMWYtZDhlNS00ODNkLWJiODAtZDVhNzgyNzJhYjQ4L2ltYWdlXkEyXkFqcGdeQXVyNzEzOTYxNTQ@._V1_.jpg",
    movieSummary:
      "Alan Turing, a British mathematician, joins the cryptography team to decipher the German enigma code. With the help of his fellow mathematicians, he builds a machine to crack the codes.",
    imdb: "8"
  },
  {
    movieName: "Matrix",
    moviePic:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
    movieSummary:
      "Thomas Anderson, a computer programmer, is led to fight an underground war against powerful computers who have constructed his entire reality with a system called the Matrix.",
    imdb: "8.7"
  },
  {
    movieName: "Intersterllar",
    moviePic: "https://pbs.twimg.com/media/EmUeXUZVcAA5v6j.jpg",
    movieSummary:
      "When  Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
    imdb: "8.6"
  },
  {
    movieName: "Ice Age",
    moviePic:
      "https://lumiere-a.akamaihd.net/v1/images/p_iceage_21384_4689eb31.jpeg?region=0%2C0%2C540%2C810",
    movieSummary:
      "Manny the mammoth, Sid the loquacious sloth, and Diego the sabre-toothed tiger go on a comical quest to return a human baby back to his father, across a world on the brink of an ice age.",
    imdb: "7.5"
  }
];

function App() {
  return (
    <div className="App">      
      {movies.map((movie) => (
        <Msg
          name={movie.movieName}
          img={movie.moviePic}
          summary={movie.movieSummary}
          imdb={movie.imdb}
        />
      ))}

      {/* <ColorBox /> */}
    </div>
  );
}
function ColorBox()
{
  const [color, colorchange]=useState(0);
    const styles = { backgroundColor: "orange", color: "teal" };
    return (
      <input
        onChange={(event) => console.log(event.target.value)
        }
        placeholder="Enter a color"
        style={styles}
      />
    );
  
  
}

function Msg({ name, img, summary, imdb }) {
  return (
    <div>
      <img height="300px" width="200px" src={img} alt="google.com"></img>
      <h1 className="name">{name}</h1>
      
      <p className="summary"><b>Summary: </b>{summary}</p>
      <p className="Imdb"><b>Imdb:</b>{imdb}</p>
    </div>
  );
}
function Counter()
{
  const [like, setLike]=useState(0);
  const [dislike, setdisLike]=useState(0);
  
  return (
    <div>
      <button onClick={()=>setLike(like+1)}>👍{like}</button>
      <button onClick={()=>setdisLike(dislike+1)}>👎{dislike}</button>      
    </div>
  );
}
export default App;
