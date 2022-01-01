import { Movie } from "./Movie";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import { useHistory } from "react-router-dom";



export function MovieList({ movies, setMovies }) {
  const history = useHistory()
  return (
    <section className="movie-list">
      {movies.map(({ name, rating, summary, poster }, index) => <Movie
        name={name}
        rating={rating}
        summary={summary}
        poster={poster}
        id={index}

        deleteButton={<IconButton
          className="movie-show-button"
          onClick={() => {
            console.log("Deleting", index);
            const deleteIdx = index;
            const remeiningMovies = movies.filter(
            (mv, idx)=> idx !== deleteIdx);
            console.log("remeiningMovies", remeiningMovies);
            setMovies(remeiningMovies) }}
          aria-label="Delete"
          color="error">
          <DeleteIcon />
        </IconButton>}
         
        editButton={<IconButton
        style={{marginLeft: "auto" }}
          className="movie-show-button"
          onClick={() => history.push("/movies/edit/" + index)}
          aria-label="Edit-movie"
          color="secondary">
          <EditIcon />
        </IconButton>}

      />
      )}
    </section>
  );
}
