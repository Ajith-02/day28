import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useHistory } from "react-router-dom";
import { useEffect, useState } from 'react';


export function MovieDetails( ) {
    const history = useHistory()
    const { id } = useParams();
   // const movie = movies[id];

const [movie, setMovie] = useState({});
useEffect(() => {
fetch(`https://61e90c217ced4a00172ff7ad.mockapi.io/movie/${id}`)
.then((data) => data.json())
.then((mv) => setMovie(mv));
});



    const styles = {
        color: movie.rating < 8 ? "crimson" : "green",
        fontWeight: "bold",
    };

    return (
        <div className="movie-details-container">
            <iframe width="100%" height="540"
                src={movie.trailer}
                title="YouTube video player"
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>

            <div className="movie-specs">

                <h3 className="movie-name">
                    {movie.name} </h3>

                <p className="movie-rating" style={styles}> ⭐ {movie.rating}</p>

                <p className="movie-summary"> {movie.summary}</p>

                <Button onClick={() => history.goBack("/movies")} variant="outlined" startIcon={<KeyboardBackspaceIcon  />}>
                    Back
                </Button>

            </div>
        </div>
    );
}
