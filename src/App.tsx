import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingpage";
import Layout from "./components/layout";
import Wallpapers from "./pages/wallpapers";
import WallpaperByCategory from "./components/wallpapers/WallPapersCategory";
import SimpleLayout from "./components/SimpleLayout";
import CurtainsPage from "./pages/curtains";

import CurtainsCategory from "./components/curatains/CurtainsCategory";

import Explore from "./components/Explore";
import ProductDetail from "./components/ProductDetails";
import AllProducts from "./components/All";
import AllSpecialCategories from "./components/SpecialCategory";
import { CartProvider } from "./ui/CardContext";
import BlindsPageComp from "./components/blinds/hero";

export default function App() {
  return (
    <CartProvider>

    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/wallpapers" element={<Wallpapers />} />
          <Route path="/blinds" element={<BlindsPageComp />} />

          <Route path="/curtains" element={<CurtainsPage />} />
          <Route path="/explore" element={<Explore />} />
    <Route path="/category/:category" element={<AllSpecialCategories />} />
          <Route path="/all" element={<AllProducts />} />

        </Route>

      <Route path="/" element={<SimpleLayout />}>
      <Route path="/wallpapers/:category" element={<WallpaperByCategory />} />

  <Route path="/:category/:speciality/:title" element={<ProductDetail />} />

</Route>  



<Route path="/curtains" element={<SimpleLayout />}>
  <Route index element={<CurtainsPage />} />
  <Route path=":category" element={<CurtainsCategory />} />
</Route>




      </Routes>

    </Router>
    </CartProvider>

  );
}
