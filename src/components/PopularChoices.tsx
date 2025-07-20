
import AnimationContainer from "../ui/AnimationContainer";
import Card from "../ui/Card";
import SectionHeaderWithButton from "../ui/SectionHeader";
import DotCarousel from "../ui/DotCorosouel";

import Blinds from "../data/blinds.json";
import Curtains from "../data/curtains.json";
import Wallpapers from "../data/wallpapers.json";

export default function PopularChoices() {
  const popularBlinds = Blinds.filter(item =>
    item.specialities?.includes("popular")
  );

  const popularCurtains = Curtains.filter(item =>
    item.specialities?.includes("popular")
  );

  const popularWallpapers = Wallpapers.filter(item =>
    item.specialities?.includes("popular")
  );

  const popularItems = [];
  let i = 0;

  while (popularItems.length < 4) {
    if (popularBlinds[i]) popularItems.push(popularBlinds[i]);
    if (popularItems.length === 4) break;

    if (popularCurtains[i]) popularItems.push(popularCurtains[i]);
    if (popularItems.length === 4) break;

    if (popularWallpapers[i]) popularItems.push(popularWallpapers[i]);
    if (popularItems.length === 4) break;

    i++;
    if (i > 10) break;
  }

  return (
    <AnimationContainer>
      <section className="mx-4 sm:mx-10 my-10">
        <SectionHeaderWithButton
          titleMain="Popular Choices"
          buttonLabel="All Products"
          buttonHref="/category/all?tag=popular"

          showAccent={false}
        />

        {/* Mobile: Dot Carousel */}
        <div className="sm:hidden mt-10">
          <DotCarousel>
            {popularItems.map(item => (
              <Card
                key={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                category={item.category}
                originalPrice={item.originalPrice}
              />
            ))}
          </DotCarousel>
        </div>

        {/* Desktop: Horizontal Scroll */}
        <div className="hidden sm:flex overflow-x-auto space-x-4 mt-10 no-scrollbar">
          {popularItems.map(item => (
            <Card
              key={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              category={item.category}
              originalPrice={item.originalPrice}
            />
          ))}
        </div>
      </section>
    </AnimationContainer>
  );
}
