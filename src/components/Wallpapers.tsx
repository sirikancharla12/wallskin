
import Wallpapers from "../data/wallpapers.json";
import AnimationContainer from "../ui/AnimationContainer";
import Card from "../ui/Card";
import DotCarousel from "../ui/DotCorosouel";
import SectionHeaderWithButton from "../ui/SectionHeader";

export default function WallPapersComponent() {
  // Filter wallpapers that include 'trending' in their specialities
  const trendingWallpapers = Wallpapers.filter(
    (item) => item.specialities?.includes("trending")
  ).slice(0, 4);

  return (
    <AnimationContainer>
      <section className="mx-4 sm:mx-10 my-10">
        <SectionHeaderWithButton
          titleMain="Trending Wallpaper"
          titleAccent="Designs"
          buttonLabel="All Products"
          buttonHref="/wallpapers/trending"

        />

        {/* Mobile: Carousel */}
        <DotCarousel>
          {trendingWallpapers.map((wallpaper) => (
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

        {/* Desktop: Horizontal Scroll */}
        <div className="hidden sm:flex overflow-x-auto space-x-4 mt-10 no-scrollbar">
          {trendingWallpapers.map((wallpaper) => (
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
