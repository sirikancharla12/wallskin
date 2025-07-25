

import AnimationContainer from "../ui/AnimationContainer";
import Card from "../ui/Card";
import SectionHeaderWithButton from "../ui/SectionHeader";
import DotCarousel from "../ui/DotCorosouel"; 

import Blinds from "../data/blinds.json";
import Curtains from "../data/curtains.json";
import Wallpapers from "../data/wallpapers.json";

export default function FeaturedForYou() {
  const featuredBlinds = Blinds.filter(item =>
    item.specialities?.includes("featured")
  );

  const featuredCurtains = Curtains.filter(item =>
    item.specialities?.includes("featured")
  );

  const featuredWallpapers = Wallpapers.filter(item =>
    item.specialities?.includes("featured")
  );

  const featuredItems = [];
  let i = 0;

  while (featuredItems.length < 4) {
    if (featuredBlinds[i]) featuredItems.push(featuredBlinds[i]);
    if (featuredItems.length === 4) break;

    if (featuredCurtains[i]) featuredItems.push(featuredCurtains[i]);
    if (featuredItems.length === 4) break;

    if (featuredWallpapers[i]) featuredItems.push(featuredWallpapers[i]);
    if (featuredItems.length === 4) break;

    i++;
    if (i > 10) break;
  }

  return (
    <AnimationContainer>
      <section className="mx-4 sm:mx-10 my-10">
        <SectionHeaderWithButton
          titleMain="Featured"
          titleAccent="For You"
          buttonLabel="All Products"
          buttonHref="/category/all?tag=featured"

        />

        {/* Mobile: Dot Carousel */}
        <div className="sm:hidden mt-10">
          <DotCarousel>
            {featuredItems.map(item => (
              <Card
                key={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                category={item.category}
                originalPrice={item.originalPrice}
                url={item.url}
              />
            ))}
          </DotCarousel>
        </div>

        {/* Desktop: Horizontal Scroll */}
        <div className="hidden sm:flex overflow-x-auto space-x-4 mt-10 no-scrollbar">
          {featuredItems.map(item => (
            <Card
              key={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              category={item.category}
              originalPrice={item.originalPrice}
                url={item.url}

            />
          ))}
        </div>
      </section>
    </AnimationContainer>
  );
}
