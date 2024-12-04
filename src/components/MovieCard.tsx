// #cSpell:disable
import React from "react"; // Importación del React
import Swal from "sweetalert2"; // Importación de la librería de los pop-ups
import { Movie } from "../types/Movie"; // Importación la interfaz de las props


interface MoviesCardProps {
    movie: Movie;
}

const MovieCard: React.FC<MoviesCardProps> = ({movie}) => {
    // Definir la ruta para importar la imagen basada en el nombre de la imagen 
    const imageSrc = new URL(`../assets/img/${movie.image}`, import.meta.url).href

    // Crear la ventana emergente
    const showDetails = () => {
        Swal.fire({
            title: movie.title,
            text: `Genero: ${movie.genre}`,
            imageUrl: imageSrc,
            imageWidth: 300,
            imageAlt: `${movie.title} Poster`,
            confirmButtonText: "Excelente",
        });
    };

    return(
        <div className="movie-card" onClick={showDetails}>
            <img src={imageSrc} alt={movie.title} className="movie-image" />
            <h3>{movie.title}</h3>
            <p>{movie.genre}</p>
        </div>
    );
};

export default MovieCard;