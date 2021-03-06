import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useParams, useHistory } from "react-router-dom";


//when two components needs the same data(movies), put the data in the common parent component (App)
// this is called HOC - Higher Order Components
export function EditMovie({ movies, setMovies }) {
    const history = useHistory()

    const { id } = useParams();
    const movie = movies[id];

  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [rating, setRating] = useState(movie.rating);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer, setTrailer] = useState(movie.trailer);


  const editMovies = () => {

    const updatedMovie = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary,
      trailer: trailer
    };
    console.log(updatedMovie);
    //Now copy the movie list and then add a new movie
    //setMovies([...movies, updatedMovie]);

    //replace the element in the updated movie list must be a copy
    // from the movies we get a copy - how?
     const copyMovieList = [...movies];
     copyMovieList[id] = updatedMovie;
     setMovies(copyMovieList)
     history.push("/movies")


  };

  return (
    <div className="add-movie-form">
      <TextField value={name} onChange={(event) => setName(event.target.value)} label="Enter movie Name" variant="standard" />
      <TextField value={poster} onChange={(event) => setPoster(event.target.value)} label="Enter movie Poster" variant="standard" />
      <TextField value={rating} onChange={(event) => setRating(event.target.value)} label="Enter movie Rating" variant="standard" />
      <TextField value={summary} onChange={(event) => setSummary(event.target.value)} label="Enter movie Summary" variant="standard" />
      <TextField value={trailer} onChange={(event) => setTrailer(event.target.value)} label= "Enter movie trailer" variant="standard" />

      <Button onClick={editMovies} variant="outlined"> Save</Button>

    </div>
  );

}
