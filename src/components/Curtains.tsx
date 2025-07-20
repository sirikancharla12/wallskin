


import AnimationContainer from "../ui/AnimationContainer";
import Card from "../ui/Card";
import SectionHeaderWithButton from "../ui/SectionHeader";
import Curtains from "../data/curtains.json";
import DotCarousel from "../ui/DotCorosouel";

export default function CurtainsComponent() {
  const topCurtains=Curtains.slice(0,4);
  return (
    <AnimationContainer>
      <section className="mx-4 sm:mx-10 my-10">
        <SectionHeaderWithButton
          titleMain="Luxury Curtains"
          titleAccent="For Every Room"
          buttonLabel="All Products"
          buttonHref="/curtains"
        />
    <DotCarousel>
      {topCurtains.map((curtain) => (
        <Card
          key={curtain.id}
          title={curtain.title}
          price={curtain.price}
          image={curtain.image}
          category={curtain.category}
          originalPrice={curtain.originalPrice}
        />
      ))}
    </DotCarousel>

    {/* Desktop: Horizontal scroll */}
    <div className="hidden sm:flex overflow-x-auto space-x-4 mt-10 no-scrollbar">
      {topCurtains.map((curtain) => (
        <Card
          key={curtain.id}
          title={curtain.title}
          price={curtain.price}
          image={curtain.image}
          category={curtain.category}
          originalPrice={curtain.originalPrice}
        />
      ))}
    </div>
       


      </section>
    </AnimationContainer>
    
  );
}
