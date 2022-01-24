import { Movie } from "./Movie";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

export function MovieList() {
  const [movies, setMovies] = useState([]);

//making as a function
  const getMovies = () => {
    fetch("https://61e90c217ced4a00172ff7ad.mockapi.io/movie")
    .then((data) => data.json())
    .then((mvs) => setMovies(mvs));
  }
  useEffect(getMovies, []);

// After delete refresh
//after deleting call the getmovies
  const deleteMovie = (id) => {
    fetch(`https://61e90c217ced4a00172ff7ad.mockapi.io/movie/${id}`, {
      method: "DELETE",
    }).then(()=> getMovies());
  };

  const history = useHistory();
  return (
    <section className="movie-list">
      {movies.map(({ name, rating, summary, poster, id }, index) => (
        <Movie
          name={name}
          rating={rating}
          summary={summary}
          poster={poster}
          id={id}
          deleteButton={
            <IconButton
              className="movie-show-button"
              onClick={() => deleteMovie(id)
                /*
            console.log("Deleting", index);
            const deleteIdx = index;
            const remeiningMovies = movies.filter(
            (mv, idx)=> idx !== deleteIdx);
            console.log("remeiningMovies", remeiningMovies);
            setMovies(remeiningMovies)
            */
              }
              aria-label="Delete"
              color="error"
            >
              <DeleteIcon />
            </IconButton>
          }
          editButton={
            <IconButton
              style={{ marginLeft: "auto" }}
              className="movie-show-button"
              onClick={() => history.push("/movies/edit/" + index)}
              aria-label="Edit-movie"
              color="secondary"
            >
              <EditIcon />
            </IconButton>
          }
        />
      ))}
    </section>
  );
}

/*
CRUD
C - create 
R - Read - GET
U - Update - 
D - Delete - 
*/
