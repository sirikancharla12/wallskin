import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingpage";
import Layout from "./components/layout";
import Wallpapers from "./pages/wallpapers";
import BlindsPage from "./pages/blindspage";
import WallpaperByCategory from "./components/wallpapers/WallPapersCategory";
import SimpleLayout from "./components/SimpleLayout";
import CurtainsPage from "./pages/curtains";

import CurtainsCategory from "./components/curatains/CurtainsCategory";
import AllSpecialCategories from "./components/SpecialCategory";
import AllProducts from "./components/All";
import Explore from "./components/Explore";
import ProductDetail from "./components/ProductDetails";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/wallpapers" element={<Wallpapers />} />
          <Route path="/blinds" element={<BlindsPage />} />
          <Route path="/curtains" element={<CurtainsPage />} />
          <Route path="/explore" element={<Explore />} />


        </Route>
          <Route element={<SimpleLayout />}>
          <Route path="/wallpapers/:category" element={<WallpaperByCategory />} />
          <Route path="/curatins/:category" element={<CurtainsCategory />} />
          <Route path="/category/:category" element={<AllSpecialCategories />} />
          <Route path="/all" element={<AllProducts />} />
            <Route path="/:category/:title" element={<ProductDetail />} />
          

          




        </Route>
      </Routes>

    </Router>
  );
}
