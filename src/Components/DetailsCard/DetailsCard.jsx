import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./DetailsCard.css";

const DetailsCard = () => {
  const { id } = useParams(); // Obtener el ID desde la URL
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(
          `https://dragonball-api.com/api/characters/${id}`
        );
        if (!response.ok) {
          throw new Error("Error al obtener los datos del personaje");
        }
        const data = await response.json();
        setCharacter(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  if (loading) {
    return <p>Cargando personaje...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const {
    image,
    name,
    race,
    gender,
    ki,
    maxKi,
    affiliation,
    description,
    originPlanet,
    transformations,
  } = character;

  return (
    <>
      <div className="details-card">
        <div className="image2">
          <img src={image} alt={`Imagen de ${name}`} className="person2" />
        </div>
        <div className="datos2">
          <p className="titulo-name2">{name}</p>
          <p className="valor2">{`${race}, ${gender}`}</p>
          <p className="titulo2">Base KI:</p>
          <p className="valor2">{ki}</p>
          <p className="titulo2">Total KI:</p>
          <p className="valor2">{maxKi}</p>
          <p className="titulo2">Afiliación:</p>
          <p className="valor2">{affiliation}</p>
          <p className="titulo2">Descripción:</p>
          <p className="valor2">{description}</p>
          <p className="titulo2">Planeta de Origen:</p>
          <p className="valor2">{originPlanet.name}</p>
          <p className="valor2">{originPlanet.description}</p>
        </div>
      </div>
      <div className="details-transformations">
        <h3 className="transformations-title">Transformaciones</h3>
        <div className="transformations-container">
          {transformations.map((transformation) => (
            <div key={transformation.id} className="transformation-card">
              <div className="transformation-image">
                <img
                  src={transformation.image}
                  alt={`Imagen de ${transformation.name}`}
                />
              </div>
              <div className="transformation-data">
                <p className="transformation-name">{transformation.name}</p>
                <p className="transformation-ki">KI: {transformation.ki}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DetailsCard;
