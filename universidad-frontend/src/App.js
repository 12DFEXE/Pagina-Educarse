import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import NavbarInstitucional from './NavbarInstitucional'; // ✅ menú institucional global

import Login from './Login';
import Donde from './Donde';
import SobreIFTS from './SobreIFTS';
import OfertaAcademica from './OfertaAcademica';
import Informatica from './pages/Informatica';
import Administracion from './pages/Administracion';
import Economia from './pages/Economia';
import Idiomas from './pages/Idiomas';
import Derecho from './pages/Derecho';
import Convenio from './Convenio';
import Register from './Register';
import Materias from './Materias';
import OpcionesAElegir from './OpcionesAElegir';
import Formulario from './Formulario';
import Chatbot from './Chatbot';
import Institucionalinicio from './Institucional-Inicio';

function App() {
  const location = useLocation();



  const showChatbot = location.pathname !== '/';
  

  return (
    <>
      <NavbarInstitucional /> {/* ✅ aparece siempre arriba */}

      <Routes>
        <Route path="/" element={<Institucionalinicio />} />
        <Route path="/Formulario" element={<Formulario />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/materias" element={<Materias />} />
        <Route path="/opcionesaelegir" element={<OpcionesAElegir />} />
        <Route path="/Donde" element={<Donde />} />
        <Route path="/SobreIFTS" element={<SobreIFTS />} />
        <Route path="/OfertaAcademica" element={<OfertaAcademica />} />
        <Route path="/Convenio" element={<Convenio />} />
        <Route path="/Informatica" element={<Informatica />} />
        <Route path="/Administracion" element={<Administracion />} />
        <Route path="/Economia" element={<Economia />} />
        <Route path="Idiomas" element={<Idiomas />} />
        <Route path="/Derecho" element={<Derecho />} />

      </Routes>

      {showChatbot && <Chatbot />}
    </>
  );
}

export default App;