
import { Movie } from "./Movie";


export function MovieList({movies}) {
 
 
  return (
    <section>
   

      <div className="movie-list">

        {movies.map((mv, index) => (
          <Movie
            key={index}
            name={mv.movieName} 
            poster={mv.moviePic}
            rating={mv.imdb}
            summary={mv.movieSummary}
            id={index} />
        ))}
      </div>
    </section>
  );
}
