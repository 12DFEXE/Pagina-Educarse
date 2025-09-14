import { Routes, Route, useLocation } from 'react-router-dom';
import Login from './Login';
import SobreIFTS from './SobreIFTS';
import Register from './Register';
import Materias from './Materias';
import OpcionesAElegir from './OpcionesAElegir';
import Formulario from './Formulario'; // ✅ correcto
import Instituciones from './Instituciones';
import Calendario from './Calendario';
import Chatbot from './Chatbot';  // 👈 asegurate que el archivo se llame Chatbot.js con mayúscula
import Institucionalinicio from './Institucional-Inicio';

import React from 'react';

function App() {
  const location = useLocation();

  // No mostrar ni Calendario ni Chatbot en la página de login ("/")
  const chatbottt = location.pathname !== '/';
  const calendar = location.pathname !== '/' && location.pathname !== "/instituciones" && location.pathname !== "/login" && location.pathname!=="/Formulario";


  return (
    <>
      <Routes>
        <Route path="/" element={<Institucionalinicio />} />
        <Route path="/Formulario" element={<Formulario />} />  
        <Route path="/login" element={<Login />} />  
        <Route path="/registro" element={<Register />} />
        <Route path="/materias" element={<Materias />} />
        <Route path="/opcionesaelegir" element={<OpcionesAElegir />} />
        <Route path="/instituciones" element={<Instituciones />} />
        <Route path="/SobreIFTS" element={<SobreIFTS />} />

      </Routes>

      {calendar && <Calendario />}
      {chatbottt && <Chatbot />}
    </>
  );
}

export default App;//
