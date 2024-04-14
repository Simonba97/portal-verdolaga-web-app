import FooterNextGame from "./components/common/FooterNextGame";
import HeroSection from "./components/HeroSection";
import NextMatch from "./pages/NextMatch";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PreviousMatch from "./pages/PreviousMatch";
import FixtureTeam from "./pages/FixtureTeam";
import MatchDetail from "./pages/MatchDetail";
import bgApp from '../src/assets/bgApp.jpg';
import Sidebar1 from "./components/common/Sidebar1";

const App = () => {
  return (
    <Router>

      {/* Cover */}
      <div className="fixed -z-50 h-full w-full bg-cover" style={{ backgroundImage: `url(${bgApp})` }}></div>

      {/* Renderiza el componente SideBar */}
      <Sidebar1 />
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
        </Routes>
      </main>

      {/* Renderiza el componente FooterNextGame */}
      <FooterNextGame />
    </Router>
  )
}

export default App;
