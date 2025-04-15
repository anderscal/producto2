import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Card from "./Components/Card/Card";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dragonball-api.com/api/characters/")
      .then((response) => response.json())
      .then((data) => setUsers(data.items))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <Header />
       <main>
        {
          users.map((user) => (
            <Card 
            image={user.image} 
            key={user.id}
            name={user.name}
            raza={user.race}
            genero={user.gender}
            kiBase={user.ki} 
            kiTotal={user.maxKi} 
            affiliation={user.affiliation} 
            />
          ))
        }
      </main> 
    </>
  );
};

export default App;
