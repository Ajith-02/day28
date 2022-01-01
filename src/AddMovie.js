import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory } from "react-router-dom";


//when two components needs the same data(movies), put the data in the common parent component (App)
// this is called HOC - Higher Order Components
export function AddMovie({ movies, setMovies }) {
  const history = useHistory()

  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");


  const addMovies = () => {

    const newMovie = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary,
      trailer: trailer
    };
    console.log(newMovie);
    //Now copy the movie list and then add a new movie
    setMovies([...movies, newMovie]);
    history.push("/movies")

  };

  return (
    <div className="add-movie-form">
      <TextField value={name} onChange={(event) => setName(event.target.value)} label="Enter movie Name" variant="standard" />
      <TextField value={poster} onChange={(event) => setPoster(event.target.value)} label="Enter movie Poster" variant="standard" />
      <TextField value={rating} onChange={(event) => setRating(event.target.value)} label="Enter movie Rating" variant="standard" />
      <TextField value={summary} onChange={(event) => setSummary(event.target.value)} label="Enter movie Summary" variant="standard" />
      <TextField value={trailer} onChange={(event) => setTrailer(event.target.value)} label= "Enter movie trailer" variant="standard" />

      <Button onClick={addMovies} variant="outlined">Add Movie</Button>

    </div>
  );

}
