import AnimationContainer from "../ui/AnimationContainer";



export default function HeroLandingPage() {
  return (
    <AnimationContainer>
    <section
      className={`
        w-full
        bg-cover bg-center
        flex items-start justify-start
        px-6 py-10 sm:py-20 
        aspect-square md:aspect-auto
        md:min-h-[calc(100vh-80px)]
        lg:items-top lg:pl-40
      `}
      style={{
        backgroundImage: 'url("/landingpage/hero-landingpage.png")',
      }}
    >
      <div
        className={`
          w-full max-w-3xl text-dark-gray font-sk space-y-5
          lg:-translate-y-12
        `}
      >
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extralight font-sk tracking-wide">
  Elevate{" "}
  <span className="font-nautigal font-light text-fancy-color">
    Your
  </span>{" "}
  Space
</h1>


        <p className="text-base sm:text-lg font-light text-dark-gray font-sk leading-relaxed tracking-relaxed">
          Premium Wallpapers, Curtains & Blinds Crafted For Harmony
        </p>

      <div className="flex flex-wrap gap-4 mt-4">
  <button className="px-5 py-2 bg-soft-gray  border border-fancy text-fancy-color hover:bg-fancy-color hover:text-white transition-all text-sm rounded">
    Shop Now
  </button>
  <button className="px-5 py-2 bg-soft-gray border border-fancy text-fancy-color hover:bg-fancy-color hover:text-white transition-all text-sm rounded">
    Explore Collections
  </button>
</div>

      </div>
    </section>
    </AnimationContainer>
  );
}
