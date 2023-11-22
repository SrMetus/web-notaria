import React from "react";
import "../styles/home.css";
import imgHeader from "../img/images.jpg";

export const Home = () => {
  return (
    <div className="home-container">
      <div className="overlay"></div>
      <img
        src={imgHeader}
        alt="Imagen de fondo"
        className="background-image"
      />
      <div className="content">
        <button className="btn btn-success">Hola calvita ❤️</button>
      </div>
    </div>
  );
};
