//#cSpell:disable 
import React, {useState} from "react";
import "./App.css";
import MovieList from './components/MovieList';
import Footer from "./components/footer";

const App: React.FC = () => {
  const [movies] = useState([
    {
      id: 1,
      title: "Spiderman",
      genre: "Ciencia Ficción y Acción",
      image: "spider-man homecoming.jpg",
    },
    {
      id: 2,
      title: "The Mandalorian",
      genre: "Acción y Aventura",
      image: "The-Mandalorian-Star-Wars-2.jpg",
    },
    {
      id: 3,
      title: "Avengers End Game",
      genre: "Acción y Fantasía",
      image: "c630ce36-242b-48ac-b6db-217c94e1b114-snapshot-1590667253-width936-quality90.jpeg"
    },
    {
      id: 4,
      title: "Jurassic World Campamento Cretácico",
      genre: "Acción y Ciencia ficción",
      image: "CampamentoCretacico.jpg",
    },
    {
      id: 5,
      title: "Cómo entrenar a tu dragón 3",
      genre: "Acción y Aventura",
      image: "Dragon.jpg",
    },
    {
      id: 6,
      title: "Sweet Tooth",
      genre: "Aventura y Fantasí",
      image: "pixelcut-export.png",
    },
    {
      id: 7,
      title: "Hilda",
      genre: "Animación y Aventura",
      image: "Hilda.jpg",
    },
    {
      id: 8,
      title: "Elementos",
      genre: "Fantasía y Cine Romántico",
      image: "Elemental.png",
    },
    {
      id: 9,
      title: "Gato con botas el último deseo",
      genre: "Cine Familiar y Aventura",
      image: "ElGatoConBotas.jpg",
    },
    {
      id: 10,
      title: "Pokémon Detective Pikachu",
      genre: "Aventura y Fantasía",
      image: "Pokemon.jpg",
    },
  ]);
  return(
    <div className="app-container">
      <h1 className="app-title">🎬 PeliPop 🎬</h1>
      <MovieList movies={movies} />
      <Footer />
      <h1 className="app-title">Gracias por visitarnos 😝</h1>
    </div>
  );
};

export default App;