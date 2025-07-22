import AnimationContainer from "../../ui/AnimationContainer";
import Card from "../../ui/Card";
import DotCarousel from "../../ui/DotCorosouel";
import SectionHeaderWithButton from "../../ui/SectionHeader";
import Wallpapers from "../../data/curtains.json";

export default function BestSellersCurtains() {
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
          buttonHref="/curtains/bestseller"
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
                      url={wallpaper.url}
                         

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
                      url={wallpaper.url}
                      

            />
          ))}
        </div>
      </section>
    </AnimationContainer>
  );
}
