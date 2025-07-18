

import AnimationContainer from "../ui/AnimationContainer";
import Card from "../ui/Card";
import SectionHeaderWithButton from "../ui/SectionHeader";
import Wallpapers from "../data/wallpapers.json";
import DotCarousel from "../ui/DotCorosouel";

export default function WallpapersComponent() {
  return (
    <AnimationContainer>
      <section className="mx-4  sm:mx-10 my-10">
        <SectionHeaderWithButton
          titleMain="Trending Wallpaper"
          titleAccent="Designs"
          buttonLabel="All Products"
          buttonHref="/"
        />

        {/* Mobile: Dot carousel */}
        <DotCarousel>
          {Wallpapers.map((wallpaper) => (
            <Card
              key={wallpaper.id}
              title={wallpaper.title}
              price={wallpaper.price}
              image={wallpaper.image}
              category={wallpaper.category}
              originalPrice={wallpaper.originalPrice}
            />
          ))}
        </DotCarousel>

        {/* Desktop: Horizontal scroll */}
        <div className="hidden sm:flex overflow-x-auto space-x-4 mt-10 no-scrollbar">
          {Wallpapers.map((wallpaper) => (
            <Card
              key={wallpaper.id}
              title={wallpaper.title}
              price={wallpaper.price}
              image={wallpaper.image}
              category={wallpaper.category}
              originalPrice={wallpaper.originalPrice}
            />
          ))}
        </div>
      </section>
    </AnimationContainer>
  );
}
