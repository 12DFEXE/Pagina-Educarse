import './NavbarInstitucional.css';
import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function NavbarInstitucional() {
  const navigate = useNavigate();
  const location = useLocation();
  const [seleccionada, setSeleccionada] = useState(false);

  const manejarClick = (rutaDestino) => {
    setSeleccionada(true);
    setTimeout(() => {
      navigate(rutaDestino);
    }, 300);
  };

  const mostrarCampus = location.pathname !== '/opcionesaelegir';
  const mostrarRegis = location.pathname !== '/opcionesaelegir';
  const mostrarTextoEducativo = location.pathname === '/opcionesaelegir';
  

  // 👇 Clase condicional
  const navbarClase = location.pathname === '/opcionesaelegir'
    ? 'institucional-navbar navbar-compacta'
    : 'institucional-navbar';

  return (
    <nav className={navbarClase}>
      <div className="logo">
        <Link to="/">
          <img src="/imagenes/logoIFTS.png" alt="Logo IFTS" />
        </Link>
      </div>

      {mostrarTextoEducativo && (
        <div className="texto-educativo">
          <p>📚 Mi Libreta Virtual</p>
        </div>
      )}

      <div className="botones-navbar">
        {mostrarRegis && (
          <>
            <button className="btn" onClick={() => manejarClick('/Formulario')}>
              Inscribite Ahora
            </button>

            {mostrarCampus && (
              <button className="btncampus" onClick={() => manejarClick('/login')}>
                Accedé a la Libreta Virtual
              </button>
            )}
          </>
        )}
      </div>
    </nav>
  );
}

export default NavbarInstitucional;