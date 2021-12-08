import { useState } from 'react';
import { Counter } from './Counter';




export function Movie({ name, rating, summary, poster }) {
  const [show, setShow] = useState(true);
  //conditional styling
  const styles = {
    color: rating < 8 ? "crimson" : "green",
    fontWeight: "bold",
  };

  return (
    <div className="movie-container">
      <img className="movie-poster" src={poster} alt={name} />
      <div className="movie-specs">
        <h3 className="movie-name">{name}</h3>
        <p className="movie-rating" style={styles}> ⭐ {rating}</p>
      </div>
      <button className="movie-show-button" onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"} description
      </button>
      {/*//conditional rendering*/}
      {show ? <p className="movie-summary"> {summary}</p> : ""}
      <Counter />
    </div>
  );
}
