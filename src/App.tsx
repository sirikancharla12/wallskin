import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingpage";
import Layout from "./components/layout";
import Wallpapers from "./pages/wallpapers";
import BlindsPage from "./pages/blindspage";
import WallpaperByCategory from "./components/wallpapers/WallPapersCategory";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/wallpapers" element={<Wallpapers />} />
          <Route path="/blinds" element={<BlindsPage />} />
            <Route path="/wallpapers/:category" element={<WallpaperByCategory />} />
        </Route>
      </Routes>
    </Router>
  );
}
