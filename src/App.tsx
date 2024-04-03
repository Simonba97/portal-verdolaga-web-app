import FooterNextGame from "./components/common/FooterNextGame";
import HeroSection from "./components/HeroSection";
import NextMatch from "./pages/NextMatch";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PreviousMatch from "./pages/PreviousMatch";
import Navbar from "./components/common/Navbar";
import FixtureTeam from "./pages/FixtureTeam";
import MatchDetail from "./pages/MatchDetail";

const App = () => {
  return (
    <Router>
      {/* FooterNextGame siempre visible en todas las rutas */}
      {/* <Navbar /> */}

      <Routes>
        {/* Ruta para la página principal */}
        <Route path="/" element={<>
          <HeroSection />
        </>} />

        {/* Ruta para la información del partido */}
        <Route path="/next-match" element={<NextMatch />} />
        <Route path="/previous-match" element={<PreviousMatch />} />
        <Route path="/fixture-team" element={<FixtureTeam />} />
        <Route path="/detail-match" element={<MatchDetail />} />
      </Routes>

      {/* FooterNextGame siempre visible en todas las rutas */}
      <FooterNextGame />
    </Router>
  )
}

export default App;
