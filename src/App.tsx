import { Route, Routes } from 'react-router-dom';
import SideBar from "./components/common/SideBar";
import FooterNextGame from "./components/common/FooterNextGame";
import HeroSection from "./components/HeroSection";
import NextMatch from "./pages/NextMatch";
import LastMatch from "./pages/LastMatch";
import FixtureTeam from "./pages/FixtureTeam";
import MatchDetail from "./pages/MatchDetail";
import bgApp from '../src/assets/bgApp.jpg';
import Standings from './pages/Standings';

const App = () => {

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
          <Route path="/last-match" element={<LastMatch />} />
          <Route path="/fixture-team" element={<FixtureTeam />} />
          <Route path="/detail-match" element={<MatchDetail />} />
          <Route path="/standings" element={<Standings />} />
        </Routes>
      </main>

      {/* Renderiza el componente FooterNextGame */}
      <FooterNextGame />
    </div>
  )
}

export default App;
