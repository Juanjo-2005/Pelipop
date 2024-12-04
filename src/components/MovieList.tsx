// #cSpell:disable
import React from "react";
import { Movie } from "../types/Movie";
import MovieCard from "./MovieCard";

// Definir los Porps con la interfaz de Movie
interface MoviesListProps {
    movies: Movie[];
}

const MoviesList: React.FC<MoviesListProps> = ({ movies }) => {
    return(
        <div className="movie-list">
            {/* Itera sobre las Peliculas y crea una tarjeta de cada una */}
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
};

export default MoviesList;