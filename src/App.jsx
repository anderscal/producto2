import { useEffect, useState } from 'react';
import Header from "./Components/Header/Header";
import Card from "./Components/Card/Card"; // Asegúrate de que este componente coincide con los datos de Dragon Ball
import Pagination from '@mui/material/Pagination';
import "./App.css"

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1); // Estado para la página actual

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(`https://dragonball-api.com/api/characters?page=${currentPage}`);
        const data = await response.json();
        setCharacters(data.items); // Los personajes están en data.items
        setTotalPages(data.meta.totalPages); // El total de páginas está en data.meta.totalPages
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCharacters();
  }, [currentPage]); // Se ejecuta cada vez que currentPage cambia

  const handlePagination = (event, page) => {
    setCurrentPage(page); // Actualiza el estado de la página actual
  };

  return (
    <>
      <Header />
      <main>
        {characters.map((character) => (
          <Card
            key={character.id}
            image={character.image}
            name={character.name}
            raza={character.race}
            genero={character.gender}
            kiBase={character.ki}
            kiTotal={character.maxKi}
            affiliation={character.affiliation}
          />
        ))}
      </main>
      <div id="pagination">
        <Pagination
          count={totalPages}
          page={currentPage} // Indica la página actual al componente Pagination
          onChange={handlePagination}
          variant="outlined"
          shape="rounded"
        />
      </div>
    </>
  );
};

export default App;