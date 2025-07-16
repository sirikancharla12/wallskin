import AnimationContainer from "../ui/AnimationContainer";
import SectionHeaderWithButton from "../ui/SectionHeader";

export default function Explore() {
  return (
    <AnimationContainer>
      <section className="mx-4 sm:mx-10 my-16 md:min-h-[calc(100vh-70px)] flex flex-col justify-start">
        <div className="flex items-center gap-4 mb-4">
          <SectionHeaderWithButton
            titleMain="Explore Our"
            titleAccent="Collections"
            showButton={false}
          />
          <div className="flex-1 h-[2px] bg-soft-gray mt-4"></div>
        </div>

        <div className="flex-1 flex flex-col lg:flex-row gap-3">
          <div className="flex flex-col gap-3 flex-1 h-full">
            <div className="flex-1 relative overflow-hidden">
              <img
                src="/landingpage/wallpaper.png"
                alt="Wallpaper"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-4">
                <h3 className="text-white text-3xl font-sk font-light">Wallpaper</h3>
                <p className="text-white text-base font-sk font-lighter">Transform Walls With Handcrafted Textures And Modern Prints</p>
              </div>
            </div>

            <div className="flex-1 relative overflow-hidden">
              <img
                src="/landingpage/blinds.png"
                alt="Blinds"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-4">
                <h3 className="text-white text-3xl font-sk font-light">Blinds</h3>
                <p className="text-white text-base font-sk font-light">Precision Shades For Privacy And Style </p>
              </div>
            </div>
          </div>

          <div className="flex-1 relative overflow-hidden h-full">
            <img
              src="/landingpage/curtains.png"
              alt="Curtains"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-4">
              <h3 className="text-white text-3xl font-sk font-light">Curtains</h3>
              <p className="text-white text-base font-sk font-light">Light Control Meets Elegance Tailored For Your Windows</p>
            </div>
          </div>
        </div>
      </section>
    </AnimationContainer>
  );
}
