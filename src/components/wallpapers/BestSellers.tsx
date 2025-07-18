import AnimationContainer from "../../ui/AnimationContainer";
import Card from "../../ui/Card";
import DotCarousel from "../../ui/DotCorosouel";
import SectionHeaderWithButton from "../../ui/SectionHeader";
import Wallpapers from "../../data/wallpapers.json";

export default function BestSellers() {
  // Filter wallpapers that include 'trending' in their specialities
  const trendingWallpapers = Wallpapers.filter(
    (item) => item.specialities?.includes("bestseller")
  ).slice(0, 4);

  return (
    <AnimationContainer>
      <section className="mx-4 sm:mx-10 my-10">
        <SectionHeaderWithButton
          titleMain="Bestsellers Across"
          titleAccent="Collections"
          buttonLabel="All Products"
          buttonHref="/"
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
