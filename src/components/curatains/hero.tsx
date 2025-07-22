


import { Link } from "react-router-dom";
import AnimationContainer from "../../ui/AnimationContainer";

export default function HeroCurtainsPage() {
  return (
    <AnimationContainer>
      <section
        className={`
          w-full
          bg-cover bg-center
          flex items-start justify-end  
          px-6 py-10 sm:py-20  
          aspect-square md:aspect-auto
          md:min-h-[calc(100vh-80px)]
          lg:items-top 
        `}
        style={{
          backgroundImage: 'url("/wallpapers/herowallapaper.png")',
        }}
      >
        <div
          className={`
            w-full max-w-3xl text-dark-gray font-sk space-y-5
            lg:-translate-y-12
            text-right 
          `}
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extralight font-sk tracking-wide">
            Curtains{" "}
            <span className="font-nautigal  font-light text-fancy-color">
              That Do
            </span>{" "}
            More
          </h1>

          <p className="text-base sm:text-lg font-light text-dark-gray text-right font-sk leading-relaxed tracking-relaxed">
            Peel, Stick And Transform With Designer Patterns That Evolve With You
          </p>

          <div className="flex flex-wrap justify-start lg:justify-end lg:mr-20 gap-4 mt-4">
            <Link to="/curtains/all">
             <button className="px-5 py-2 bg-soft-gray  border border-fancy text-fancy-color hover:bg-fancy-color hover:text-white transition-all text-sm rounded">
              Shop Now
            </button>
            </Link>
           
            <a href="#shopbycategories">
            <button className="px-5 py-2 bg-soft-gray border border-fancy text-fancy-color hover:bg-fancy-color hover:text-white transition-all text-sm rounded">
              Explore Collections
            </button>
            </a>
          </div>
        </div>
      </section>
    </AnimationContainer>
  );
}
