import './Institucional-inicio.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

function Institucionalinicio() {
  const navigate = useNavigate();
  const location = useLocation();
  const [seleccionada, setSeleccionada] = useState(false);

  const manejarClick = (rutaDestino) => {
    setSeleccionada(true);
    setTimeout(() => {
      navigate(rutaDestino);
    }, 300);
  };

  // 👇 Ocultar el texto si estás en /opcionesaelegir
  const mostrarAcceso = location.pathname !== '/opcionesaelegir';

  return (
    <div className="institucional-wrapper">
      <header className="institucional-header">
        <div className="hero-content">
          <h1>INSTITUTO DE FORMACIÓN TÉCNICA SUPERIOR</h1>
          <p>Educación pública, no arancelada y de calidad para tu futuro</p>

          {mostrarAcceso && (
            <h2 className="acceso-campus"></h2>
          )}
        </div>
      </header>

      <main>
        <section id="programas" className="institucional-section">
          <h2
            className={`SobreIFTS ${seleccionada ? 'activa' : ''}`}
            onClick={() => manejarClick('/SobreIFTS')}
          >
            Sobre IFTS
          </h2>
        </section>

        <section id="OfertaAcademica" className="institucional-section">
          <h2
            className={`OfertaAcademica ${seleccionada ? 'activa' : ''}`}
            onClick={() => manejarClick('/OfertaAcademica')}
          >
            Oferta Académica
          </h2>
        </section>

        <section id="eventos" className="institucional-section">
          <h2
            className={`Convenio ${seleccionada ? 'activa' : ''}`}
            onClick={() => manejarClick('/Convenio')}
          >
            Convenios con Universidades
          </h2>
        </section>

        <section id="institucional" className="institucional-section">
          <h2
            className={`Donde ${seleccionada ? 'activa' : ''}`}
            onClick={() => manejarClick('/Donde')}
          >
            ¿Dónde encontrarnos?
          </h2>
        </section>
      </main>

      <footer className="institucional-footer">
        <p>© 2025 Instituto de Formación Técnica (IFTS). Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Institucionalinicio;