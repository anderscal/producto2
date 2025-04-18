import React from "react";
import "./Card.css";

const Card = (props) => {
  const { image, name,raza,genero,kiBase, kiTotal, affiliation } = props;

  return (
   
    <div className="base">
      <div className="image">
        <img src={image} alt={`Imagen de ${name}`} className="person" />
      </div>
      <div className="datos">
        <p className="titulo-name">{name}</p>
        <p className="valor">{`${raza}, ${genero}`}</p>
        <p className="titulo">Base KI:</p>
        <p className="valor">{kiBase}</p>
        <p className="titulo">Total KI:</p>
        <p className="valor">{kiTotal}</p>
        <p className="titulo"> Afilliation:</p>
        <p className="valor">{affiliation}</p>
      </div>
    </div>
  );
};

export default Card;
