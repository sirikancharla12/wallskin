import CurtainsComponent from "../components/Curtains";
import Explore from "../components/Explore";
import HeroLandingPage from "../components/hero";
import HeroWallpapers from "../components/HeroWallpapers";
import PopularChoices from "../components/PopularChoices";
import WallpapersComponent from "../components/Wallpapers";
import BlindsComponent from "../components/Blinds";
import OurVision from "../components/Vision";
import FeaturedForYou from "../components/Featured";
import WhyChooseUs from "../components/whyChooseUs";

export default function LandingPage(){
    return (
        <>
<HeroLandingPage/>
<Explore/>
<CurtainsComponent/>
<WallpapersComponent/>
<HeroWallpapers/>
<PopularChoices/>
<OurVision/>
<BlindsComponent/>
<FeaturedForYou/>
<WhyChooseUs/>

        </>
    )
}