import { useState } from "react";
import "./App.css";
import { MovieList } from "./MovieList";
import { Switch, Route, Redirect } from "react-router-dom";
import { AddColor } from "./AddColor";
import { AddMovie } from "./AddMovie";
import { NotFound } from "./NotFound";
import { Welcone } from "./Welcone";
import { MovieDetails } from "./MovieDetails";
import { EditMovie } from "./EditMovie";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Paper from "@mui/material/Paper";
import useWindowSize from "react-use/lib/useWindowSize"
import Confetti from "react-confetti"

function App() {
  const INITIAL_MOVIES = [
    {
      poster:
        "https://moviegalleri.net/wp-content/uploads/2020/01/Hero-Suriya-Soorarai-Pottru-Movie-Teaser-Release-Jan-7th-Poster-HD.jpg",
      name: "Soorarai Pottru",
      rating: "9.1",
      summary:
        "Maara, a young man from a remote village, dreams of launching his own airline service. However, he must overcome several obstacles and challenges in order to be successful in his quest.",
      trailer: "https://www.youtube.com/embed/fa_DIwRsa9o",
    },
    {
      poster:
        "https://m.media-amazon.com/images/M/MV5BNDJhNWRjMjgtNzg1NS00YjBjLThlZjUtYTViNjdjOGZmNmQ2XkEyXkFqcGdeQXVyMjYwMDk5NjE@._V1_.jpg",
      name: "Baba",
      rating: "5.3",
      summary:
        "Baba is an atheist who always questions the higher power. A turn of events bestows Baba with divine powers and he takes it as an opportunity to help the people in his state.",
      trailer: "https://www.youtube.com/embed/0U9uPZSOt8s",
    },
    {
      poster:
        "https://m.media-amazon.com/images/M/MV5BMjFkMTFjYjgtNDhkNS00MGNmLWJkZWMtZWIwNGYyOWE3MTM0XkEyXkFqcGdeQXVyMTE1MjcwOTA4._V1_FMjpg_UX1000_.jpg",
      name: "Maanaadu",
      rating: "9.3",
      summary:
        "On the day of a public conference by the state's Chief Minister, his bodyguard and a police officer become stuck in a time loop.",
      trailer: "https://www.youtube.com/embed/t9retstFUlM",
    },
    {
      poster:
        "https://www.thehindu.com/entertainment/movies/z5lmd3/article35738194.ece/BINARY/jai",
      name: "Jai Bhim",
      rating: "9.5",
      summary:
        "A pregnant woman from a primitive tribal community, searches desperately for her husband, who is missing from police custody. A High Court advocate rises in support to find her husband and seek justice for them.",
      trailer: "https://www.youtube.com/embed/Gc6dEDnL8JA",
    },
    {
      poster:
        "https://images-na.ssl-images-amazon.com/images/I/71JmxE8pC1L._RI_.jpg",
      name: "Annaamalai",
      rating: "7.7",
      summary:
        "Annamalai, a milkman, and Ashok, the son of a rich businessman, are childhood friends. However Ashok's father disapproves of their friendship and attempts to create a rift between the two.",
      trailer: "https://www.youtube.com/embed/9Qln87o5PvE",
    },
    {
      poster:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTWQ5phF7_mITj-vhcGLg5vGKSXF1KmhjWNblq-8PSdW8IAbICb",
      name: "Aayirathil Oruvan",
      rating: "8.1",
      summary:
        "Anitha, a government official, embarks on a journey to find Chandramouli, an archaeologist, who went to Vietnam in order to search for any existence of the prince of the Chola dynasty.",
      trailer: "https://www.youtube.com/embed/n4OxFMlLB8I",
    },
    {
      poster:
        "https://static.moviecrow.com/gallery/20141008/46940-64ecbf36008c17a7bd5e0ccbe4daa47a.jpg",
      name: "Goa",
      rating: "6.6",
      summary:
        "Three young men, who always get into trouble in their village, dream of an effortless life. For this, they run away to Goa in the hope of finding and getting married to rich foreign women.",
    },
    {
      poster:
        "https://images-na.ssl-images-amazon.com/images/I/71LX0gmM7lL._RI_.jpg",
      name: "Polladhavan",
      rating: "7.7",
      summary:
        "Prabhu is dejected when he learns that his bike has been stolen. He decides to find the people who stole the bike, but lands in trouble when he realises that his bike has been used to transport drugs.",
    },
    {
      poster:
        "https://images.jdmagicbox.com/comp/jd_social/news/2018jul13/image-51236-r50u94uqxl.jpg",
      name: "Anjathe",
      rating: "8.1",
      summary:
        "Satya and Kiruba are friends. Satya is reckless and gets into drinking and violent fights whereas Kiruba studies hard to become a Sub-Inspector. Tables are turned when Satya becomes a Sub-Inspector.",
    },
    {
      poster:
        "https://jiocinemaweb.cdn.jio.com/jioimages.cdn.jio.com/content/entry/dynamiccontent/thumbs/512/512/0/94/41/c3b4cfd09aac11e990e939ad7f02823a_1562999216322_p_medium.jpg",
      name: "Vettaiyaadu Vilaiyaadu",
      rating: "7.9",
      summary:
        "Raghavan, a police officer, sets out to catch a serial killer who killed his friend's daughter, Rani. As the culprit goes rampant in other countries, Raghavan is forced to go to New York to catch him.",
    },
    {
      poster:
        "https://upload.wikimedia.org/wikipedia/en/d/d7/Valimai_poster.jpg",
      name: "Valimai",
      rating: "9.1",
      summary:
        "Valimai is an upcoming Indian Tamil-language action thriller film written and directed by H. Vinoth, and produced by Zee Studios and Boney Kapoor under Bayview Projects LLP. The film stars Ajith Kumar, Huma Qureshi, and Kartikeya Gummakonda.",
    },
    {
      poster:
        "https://i.scdn.co/image/ab67616d0000b273a591472e6968e41cede6c706",
      name: "Naveena Saraswathi Sabatham",
      rating: "4.7",
      summary:
        "Lord Shiva crashes four friends' bachelor party as he wants to recruit four mortals. After a night of debauchery, they wake up on a deserted island with no memory of how they got there.",
    },
  ];

  const [movies, setMovies] = useState(INITIAL_MOVIES);
  const history = useHistory();
  const [mode, setMode] = useState("dark");

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={2} style={{ borderRadius: "0px", minHeight: "100vh" }}>
        <div className="App">
          <AppBar position="static" style={{ marginBottom: "16px" }}>
            <Toolbar variant="dense">
              <Button
                onClick={() => history.push("/")}
                variant="text"
                color="inherit"
              >
                Home
              </Button>
              <Button
                onClick={() => history.push("/movies")}
                variant="text"
                color="inherit"
              >
                Movies
              </Button>
              <Button
                onClick={() => history.push("/add-movies")}
                variant="text"
                color="inherit"
              >
                Add Movies
              </Button>
              <Button
                onClick={() => history.push("/color-game")}
                variant="text"
                color="inherit"
              >
                Color game
              </Button>
              <Button
                onClick={() => history.push("/tic-tac-toe")}
                variant="text"
                color="inherit"
              >
                Tictactoe game
              </Button>
              <Button
                startIcon={
                  mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />
                }
                style={{ marginLeft: "auto" }}
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                variant="text"
                color="inherit"
              >
                {mode === "Light" ? "Dark" : "Light"} mode
              </Button>
            </Toolbar>
          </AppBar>
          {/*<nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/add-movies">Add Movies</Link>
        <Link to="/color-game">Color game</Link>
      </nav>*/}

          <Switch>
            {/*Route matches with the substring, if we give path="/" in top, all the pages will bw blank */}
            {/* or if you want to keep in to use "exact" <Route exact path="/"><Welcone /></Route> it matches the exact  */}
            {/*if suppose changing the path / movies to /films,
           if we change directly it will affect the existing user
           We need to use Redirect, add Redirect in import */}
            <Route path="/films">
              <Redirect to="/movies" />
            </Route>
            <Route path="/movies/edit/:id">
              <EditMovie movies={movies} setMovies={setMovies} />
              <MovieDetails movies={movies} />
            </Route>
            <Route path="/movies/:id">
              <MovieDetails movies={movies} />
            </Route>
            <Route path="/movies">
              <MovieList movies={movies} setMovies={setMovies} />
            </Route>
            <Route path="/add-movies">
              <AddMovie movies={movies} setMovies={setMovies} />
            </Route>
            <Route path="/color-game">
              <AddColor />
            </Route>
            <Route path="/tic-tac-toe">
              <Tictactoe />
            </Route>
            <Route exact path="/">
              <Welcone />
            </Route>
            <Route path="**">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

function Tictactoe() {
  const { width, height } = useWindowSize();

  const [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const [isXTurn, setIsXTurn] = useState(true);
  const handleClick = (index) => {
    //Create a copy of the board & then update the clicked box
    // update only untouched box
    // update only untouched box & until no winner
    //if (!board[index]) also can code like this
    if (winner === null && board[index] === null) {
      const boardCopy = [...board];
      boardCopy[index] = isXTurn ? "X" : "O";
      setBoard(boardCopy);
      //Toggle X turn
      setIsXTurn(!isXTurn);
    }
  };

  const decideWinner = (board) => {

    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    //if winning condition present in board the we have a winner
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] !== null && board[a] === board[b] && board[b] === board[c]) {
        console.log("winner is:", board[a]);
        return board[a];
      }
    }
    return null;
  };
  const winner = decideWinner(board);
//conditional rendering for Confetti
  return (
    <div className="full-game" >  
    
    { winner ? <Confetti
      width={width}
      height={height} 
      
      gravity={0.3}/> : "" 
    }
       <div className="board">
      {board.map((val, index) => (
        <GameBox val={val} onPlayerClick={() => handleClick(index)} />
      ))}
    </div>
    {winner ? <h2>Winner is:{winner}</h2> : "" }
    </div>
  );
}

function GameBox({ onPlayerClick, val }) {
  //const [val, setVal] = useState(null);
  const styles = { color: val === "X" ? "green" : "red" };
  return (
    <div style={styles} onClick={onPlayerClick} className="game-box">
      {val}
    </div>
  );
}

// Toggle between X & O (onClick of the div)

export default App;

// Different pages - why?
//1. Readability - Ease of access
//2. Performance - Load only the page requested(about, contact)
//3. Sharing - link(share the exact page we look)

// SPA - Single page application
// in React we have only one html
// React Router will create multiple pages
// router is a big conditional rendering

