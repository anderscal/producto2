import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Card from "../../Components/Card/Card";

const FilterPage = () => {
  const { genero } = useParams();
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllCharacters = async () => {
      try {
        let allCharacters = [];
        let currentPage = 1;
        let totalPages = 1;

        // Realiza solicitudes hasta obtener todas las páginas
        do {
          const response = await fetch(
            `https://dragonball-api.com/api/characters?page=${currentPage}`
          );
          const data = await response.json();
          allCharacters = [...allCharacters, ...data.items];
          totalPages = data.meta.totalPages;
          currentPage++;
        } while (currentPage <= totalPages);

        // Filtra los personajes por género
        const filteredCharacters = allCharacters.filter(
          (character) => character.gender === genero
        );

        setCharacters(filteredCharacters);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllCharacters();
  }, [genero]);

  if (loading) {
    return <p>Cargando personajes...</p>;
  }

  return (
    <>
      <main>
        {characters.map((character) => (
          <Link
            key={character.id}
            className="card-link"
            to={`/details/${character.id}`}
            state={{ character }}
          >
            <Card
              image={character.image}
              name={character.name}
              raza={character.race}
              genero={character.gender}
              kiBase={character.ki}
              kiTotal={character.maxKi}
              affiliation={character.affiliation}
            />
          </Link>
        ))}
      </main>
    </>
  );
};

export default FilterPage;
