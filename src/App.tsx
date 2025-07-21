import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingpage";
import Layout from "./components/layout";
import Wallpapers from "./pages/wallpapers";
import BlindsPage from "./pages/blindspage";
import WallpaperByCategory from "./components/wallpapers/WallPapersCategory";
import SimpleLayout from "./components/SimpleLayout";
import CurtainsPage from "./pages/curtains";

import CurtainsCategory from "./components/curatains/CurtainsCategory";

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
        
 <Route path="/wallpapers" element={<SimpleLayout />}>
  <Route index element={<Wallpapers />} />
    <Route path=":category/:title" element={<ProductDetail />} />
    {/* issue is here with the product detail it directs to wallpapers/wallpapers/title but it should route to wallpapers/buddha/title
    the link is also from card comp which is in ui folder  */}

  <Route path=":category" element={<WallpaperByCategory />} />
  
</Route>

<Route path="/curtains" element={<SimpleLayout />}>
  <Route index element={<CurtainsPage />} />
  <Route path=":category" element={<CurtainsCategory />} />
    <Route path="product/:title" element={<ProductDetail />} />
</Route>


      </Routes>

    </Router>
  );
}
