import "./App.css";
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";
import { useState, useEffect } from "react";


function App() {
  const apiKey = '666b0795'; 

  const [movie, setMovie] = useState(null);

  const getMovie = async (searchTerm) => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`);
      const data = await response.json();

      setMovie(data);
      console.log('Current Movie:', movie);
    } catch (error) {
      console.error('Error fetching movie:', error);
    }
  };

  useEffect(() => {
    getMovie('Gladiator');
  }, []);

  return (
    <div className='App'>
      <Form moviesearch={getMovie} />
      <MovieDisplay currentMovie={movie} />
    </div>
  );
}

export default App;
