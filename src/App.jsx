import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./Page/HomePage/HomePage";
import DetailsPage from "./Page/DetailsPage/DetailsPage";
import FilterPage from "./Page/FilterPage/FilterPage";
import ErrorPage from "./Page/ErrorPage/ErrorPage";
import CardPersonal from "./Page/CardPersonal/CardPersonal";
const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/details/:id" element={<DetailsPage/>} />
          <Route path="/filter/:genero" element={<FilterPage/>} />
          <Route path="/acercade" element={<CardPersonal/>} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
