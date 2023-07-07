import React from "react";
import Navbar from "./componentes/navegacion/Navbar";
import {Soluciones} from "./componentes/Paginas/Soluciones";
import {Socios} from "./componentes/Paginas/Socios";
import {Productos} from "./componentes/Paginas/Productos";
import {Inicio} from "./componentes/Paginas/Inicio";
import {Login} from "./componentes/Paginas/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/Inicio" element={<Inicio/>}></Route>
          <Route path="/soluciones" element={<Soluciones/>}></Route>
          <Route path="/socios" element={<Socios/>}></Route>
          <Route path="/productos" element={<Productos/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
