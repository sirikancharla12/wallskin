import BestSellersCurtains from "../components/curatains/BestsellerCurtains";
import CurtainCategoriesComponent from "../components/curatains/CategoriesCurtains";
import FeaturedCurtains from "../components/curatains/FeaturedCurtains";
import HeroCuratinsPage from "../components/curatains/hero";
import PopularCurtains from "../components/curatains/PopularCurtains";
import TrendingCurtains from "../components/curatains/TrendingCurtains";

export default function CurtainsPage(){
    return (
        <>
<HeroCuratinsPage/>
<CurtainCategoriesComponent/>
<TrendingCurtains/>
<BestSellersCurtains/>
<PopularCurtains/>
<FeaturedCurtains/>
</>
    )
}