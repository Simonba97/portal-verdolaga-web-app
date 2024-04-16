import { useEffect } from 'react';
import { Route, Routes, useLocation, } from 'react-router-dom';
import ReactGA from 'react-ga';
import SideBar from "./components/common/SideBar";
import FooterNextGame from "./components/common/FooterNextGame";
import HeroSection from "./components/HeroSection";
import NextMatch from "./pages/NextMatch";
import PreviousMatch from "./pages/PreviousMatch";
import FixtureTeam from "./pages/FixtureTeam";
import MatchDetail from "./pages/MatchDetail";
import bgApp from '../src/assets/bgApp.jpg';

const App = () => {

  // Inicializar Google Analytics
  useEffect(() => {
    ReactGA.initialize(import.meta.env.VITE_GOOGLEANALYTICS_KEY);
  }, []);

  // Obtener la ubicación actual
  const location = useLocation();

  // Enviar el evento de página vista a Google Analytics cuando cambie la ubicación
  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  return (
    <div className='App'>
      {/* Cover */}
      <div className="fixed -z-50 h-full w-full bg-cover" style={{ backgroundImage: `url(${bgApp})` }}></div>

      {/* Renderiza el componente SideBar */}
      <SideBar />
      {/* Agrega un espacio de margen inferior al contenido principal */}
      <main className="pb-20">
        {/* Rutas y componentes del contenido principal */}
        <Routes>
          {/* Ruta para la página principal */}
          <Route path="/" element={<>
            <HeroSection />
          </>} />

          {/* Ruta para la información del partido */}
          <Route path="/next-match" element={<NextMatch />} />
          <Route path="/last-match" element={<PreviousMatch />} />
          <Route path="/fixture-team" element={<FixtureTeam />} />
          <Route path="/detail-match" element={<MatchDetail />} />
          {/*  <Route path="/standings" element={<StandingsDetail />} /> */}
        </Routes>
      </main>

      {/* Renderiza el componente FooterNextGame */}
      <FooterNextGame />
    </div>
  )
}

export default App;
