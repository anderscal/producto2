import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsCard from "../../Components/DetailsCard/DetailsCard";

const DetailsPage = () => {
  const [character, setCharacter] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://dragonball-api.com/api/characters/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Personaje no encontrado");
        }
        return response.json();
      })
      .then((data) => setCharacter(data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!character) {
    return <p>Cargando personaje...</p>;
  }

  return (
    <main>
      <DetailsCard character={character} />
    </main>
  );
};

export default DetailsPage;
