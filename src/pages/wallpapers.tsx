import BestSellers from "../components/wallpapers/BestSellers";
import ShopByCategories from "../components/wallpapers/CategoriesWall";
import HeroWallpaper from "../components/wallpapers/hero";
import PopularWallpapers from "../components/wallpapers/PopularWallpapers";
import TrendingWallpapers from "../components/wallpapers/TrendingWallpapers";

export default function Wallpapers(){
    return (
        <>
        <HeroWallpaper/>
        <div id="shopbycategories">
  <ShopByCategories />
</div>

        <TrendingWallpapers/>
        <BestSellers/>
        <PopularWallpapers/>
        </>
    )
}