import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../Components/Card/Card";
import Pagination from "@mui/material/Pagination";
import "./HomePage.css";
const HomePage = () => {
  const [characters, setCharacters] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(
          `https://dragonball-api.com/api/characters?page=${currentPage}`
        );
        const data = await response.json();
        setCharacters(data.items);
        setTotalPages(data.meta.totalPages);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCharacters();
  }, [currentPage]);

  const handlePagination = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <main>
        {characters.map((character) => (
          // <Link
          //   to={`/${character.id}`}
          //   key={character.id}
          //   className="card-link"

          //     </Link>

          <Link className="card-link" to={`/details/${character.id}`} state={{ character }}>
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
          </Link>
        ))}
      </main>
      <div id="pagination">
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePagination}
          variant="outlined"
          shape="rounded"
        />
      </div>
    </>
  );
};

export default HomePage;
