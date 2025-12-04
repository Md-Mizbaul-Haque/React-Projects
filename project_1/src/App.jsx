import { useState } from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contect from "./Pages/Contect";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contect" element={<Contect />} />
      </Routes>
    </>
  );
}

export default App;
