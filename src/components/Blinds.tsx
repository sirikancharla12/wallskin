

import AnimationContainer from "../ui/AnimationContainer";
import Card from "../ui/Card";
import SectionHeaderWithButton from "../ui/SectionHeader";
import Blinds from "../data/blinds.json";
import DotCarousel from "../ui/DotCorosouel";

export default function BlindsComponent() {
  const topFourBlinds = Blinds.slice(0, 4);

  return (
    <AnimationContainer>
      <section className="mx-4 sm:mx-10 my-10">
        <SectionHeaderWithButton
          titleMain="Precision Blinds For"
          titleAccent="Light & Privacy"
          buttonLabel="All Products"
          buttonHref="/blinds"
        />

        {/* Mobile: Dot Carousel with 4 items */}
        <div className="sm:hidden mt-10">
          <DotCarousel>
            {topFourBlinds.map((blind) => (
              <Card
                key={blind.id}
                title={blind.title}
                price={blind.price}
                image={blind.image}
                category={blind.category}
                originalPrice={blind.originalPrice}
                  url={blind.url}
              />
            ))}
          </DotCarousel>
        </div>

        {/* Desktop: Horizontal scroll with 4 items */}
        <div className="hidden sm:flex overflow-x-auto space-x-4 mt-10 no-scrollbar">
          {topFourBlinds.map((blind) => (
            <Card
              key={blind.id}
              title={blind.title}
              price={blind.price}
              image={blind.image}
              category={blind.category}
              originalPrice={blind.originalPrice}
              url={blind.url}
            />
          ))}
        </div>
      </section>
    </AnimationContainer>
  );
}
