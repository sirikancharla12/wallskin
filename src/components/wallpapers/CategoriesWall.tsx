import AnimationContainer from "../../ui/AnimationContainer";
import DotCarousel from "../../ui/DotCorosouel";
import SectionHeaderWithButton from "../../ui/SectionHeader";
import WallpaperCard from "../../ui/WallpaperCard";
import Wallpapers from "../../data/wallpaperCategories.json";


export default function WallpaperCategoriesComponent() {
  const topWallpapers = Wallpapers.slice(0, 4); // or adjust as needed

  return (
    <AnimationContainer>
      <section className="mx-4 sm:mx-10 my-10">
        <SectionHeaderWithButton
          titleMain="Shop by"
          titleAccent="Categories"
          buttonLabel="All Collections"
          buttonHref="/collections"
        />

        {/* Mobile View */}
        <div className="sm:hidden mt-10">
          <DotCarousel>
            {topWallpapers.map((item, idx) => (
              <WallpaperCard
                key={idx}
                category={item.category}
                image={item.image}
                url={item.url}
              />
            ))}
          </DotCarousel>
        </div>

        {/* Desktop View */}
        <div className="hidden sm:flex overflow-x-auto space-x-4 mt-10 no-scrollbar">
          {topWallpapers.map((item, idx) => (
            <WallpaperCard
              key={idx}
              category={item.category} 
              image={item.image}
              url={item.url}
            />
          ))}
        </div>
      </section>
    </AnimationContainer>
  );
}
