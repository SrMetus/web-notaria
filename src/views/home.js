import React from "react";
import "../styles/home.css";
import imgHeader from "../img/images.jpg";

export const Home = () => {
  return (
    <div className="home-container">
      prueba
      <div className="overlay"></div>
      <img
        src={imgHeader}
        alt="Imagen de fondo"
        className="background-image"
      />
      <div className="content">
        <b>Mesón:</b>
        <p>Amelia Morales Sanchez</p>
        <p>amorales@notariawendt.cl</p>
        <p>32-2548721</p>
        <p>Elizabeth Karstulovic Cartes</p>
        <p>elizabeth@notariawendt.cl</p>
        <p>32-2548721</p>
        <p>Julio Ossandón Gatica</p>
        <p>jossandon@notariawendt.cl</p>
        <p>32-2548722</p>
        <p>María Angélica Pradenas Vera</p>
        <p>apradenas@notariawendt.cl</p>
        <p>32-2548723</p>
        <b>Matriceras:</b>
        <p>Nazaret Johannsen R.</p>                      
        <p>naza@notariawendt.cl</p>
        <p>32-2548732</p>
        <p>Patricias Salas Molina</p>
        <p>psalas@notariawendt.cl</p>
        <p>32-2548726</p>
        <p>Tirsa Garrido Moreno</p>
        <p>tgarrido@notariawendt.cl</p>
        <p>32-2548724</p>
        <p>Sigrid Hennigs Allende</p>
        <p>sigrid@notariawendt.cl</p>
        <p>32-2548727</p>
        <p>Cristian Muñoz Rubio</p>
        <p>cmunoz@notariawendt.cl</p>
        <p>32-2548728</p>
        <p>Jessica Muñoz Valdebenito</p>
        <p>jmunoz@notariawendt.cl</p>
        <p>32-2548725</p>

        <button className="btn btn-success">Hola calvita ❤️</button>
      </div>
    </div>
  );
};
