// #cSpell:disable
import React from "react";
import "../App.css";

const Footer: React.FC=() => {
    const anio = new Date().getFullYear();
    return(
    <footer className="footer">
    <div className="footer-contenido">
        
        <div className="footer-seccion">
            <h2>Bienvenidos a 🎬 Pelipop 🎬</h2>
            <p className="texto">Todos los derechos de autor son reservados a Juan José Ceballos Ramírez, creador de la plataforma streaming <u>Pelipop.com</u></p>
            <img src="/src/assets/icon/premio-de-cine.png" alt="Pelipop" className="IconPelipop"/>
        </div>

        <div className="footer-seccion">
            <p> &copy; {anio} 🎬 Pelipop 🎬</p>
        </div>
    
    </div>
    </footer>
    )
}

export default Footer;