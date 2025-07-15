import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingpage";
import Layout from "./components/layout";
import Wallpapers from "./pages/wallpapers";
import BlindsPage from "./pages/blindspage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/wallpapers" element={<Wallpapers />} />
          <Route path="/blinds" element={<BlindsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
