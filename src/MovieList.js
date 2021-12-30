import { Movie } from "./Movie";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';


export function MovieList({ movies }) {
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
          onClick={() => { }}
          aria-label="Delete"
          color="primary">
          <DeleteIcon />
        </IconButton>}
        editButton={<IconButton
          className="movie-show-button"
          onClick={() => { }}
          aria-label="Edit"
          color="primary">
          <EditIcon />
        </IconButton>}

      />
      )}
    </section>
  );
}
