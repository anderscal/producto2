
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'
import "./App.css"
import Header from "./Components/Header/Header";
import NavBar from './Components/NavBar/NavBar';
import HomePage from './Page/HomePage/HomePage';
import DetailsPage from './Page/DetailsPage/DetailsPage';

const App = () => {
 
  return (
    <>
      <Header />
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path='/details/:id' element={<DetailsPage/>} />
          {/* <Route path="/filter/:especie" element={<FilterPage/>} />
          <Route path="*" element={<ErrorPage/>} /> */}
        </Routes>
      </BrowserRouter>
      
   
    </>
  );
};

export default App;