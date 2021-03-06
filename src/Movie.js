import { useState } from 'react';
import { Counter } from './Counter';
import IconButton from '@mui/material/IconButton';
//import DeleteIcon from '@mui/icons-material/Delete';

import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import InfoIcon from '@mui/icons-material/Info';
import { useHistory } from "react-router-dom";





export function Movie({ name, rating, summary, poster, id, deleteButton, editButton }) {
  const [show, setShow] = useState(true);
  const history = useHistory()
  //conditional styling
  const styles = {
    color: rating < 8 ? "crimson" : "green",
    fontWeight: "bold",
  };

  return (
    <Card className="movie-container">
      <img className="movie-poster" src={poster} alt={name} />
      <CardContent>

        <div className="movie-specs">

          <h3 className="movie-name">
            {name}
            <IconButton
              className="movie-show-button"
              onClick={() => { console.log(id); history.push("/movies/" + id)  }}
              aria-label="more info"
              color="primary">
              <InfoIcon /> 
            </IconButton>

            <IconButton
              className="movie-show-button"
              onClick={() => setShow(!show)}
              aria-label="hide"
              color="primary">
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton></h3>
          <p className="movie-rating" style={styles}> ⭐ {rating}</p>
        </div>
        {/*//conditional rendering*/}
        {show ? <p className="movie-summary"> {summary}</p> : ""}
        <Counter /> {editButton } {deleteButton } 
      </CardContent>
    </Card>
  );
}
