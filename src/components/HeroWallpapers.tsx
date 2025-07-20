import wallpapers from "../data/wallpapers.json";
import { useNavigate } from "react-router-dom";
import AnimationContainer from "../ui/AnimationContainer";

export default function HeroWallpapers() {
  const navigate = useNavigate();

  const landingWallpapers = wallpapers.filter((wp) =>
    wp.specialities.includes("landingpage")
  );

  const getCollectionTag = (specialities: string[]) =>
    specialities.find((tag) => tag !== "landingpage") || "collection";

  return (
    <>
    <AnimationContainer>

    
      <section className="w-full mt-20 mb-10 bg-soft-pink overflow-hidden flex flex-col md:hidden">
        {landingWallpapers[1] && (
          <>
            <div className="w-full h-[380px]">
              <img
                src={landingWallpapers[1].image || "/placeholder.svg"}
                alt={landingWallpapers[1].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-4 py-2 mb-5 mt-5 flex  justify-between items-center gap-2">
              <h3 className="text-base font-sk capitalize text-medium-gray">
                {getCollectionTag(landingWallpapers[1].specialities)} Collection
              </h3>
              <button
                className="px-4 py-1 border border-fancy text-fancy-color rounded-sm hover:bg-gray-100 transition-colors text-sm"
                onClick={() =>
                  navigate(`/wallpapers/${getCollectionTag(landingWallpapers[1].specialities)}`)
                }
              >
                Shop Now
              </button>
            </div>
          </>
        )}

        {/* Center content */}
        <div className="w-full flex flex-col justify-center px-6 py-6 text-center items-center">
          <h2 className="text-2xl font-sk text-dark-gray">
            Find Your Perfect
            <span className="ml-2 font-nautigal text-fancy-color italic">Wallpaper</span>
          </h2>
          <p className="text-medium-gray mt-4 mb-6 text-sm max-w-sm font-sk">
            Whether you crave the warmth of linen textures, the drama of bold patterns,
            or the subtlety of neutrals, our collections adapt to your vision, one roll at a time.
          </p>
          <button
            className="px-4 py-1.5 border border-fancy text-fancy-color font-sk w-max transition-all text-sm rounded"
            onClick={() => navigate("/wallpapers")}
          >
            Discover More Collection
          </button>
        </div>

        {/* Left Column last on mobile */}
        {landingWallpapers[0] && (
          <>
            <div className="w-full h-[380px]">
              <img
                src={landingWallpapers[0].image || "/placeholder.svg"}
                alt={landingWallpapers[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-4 py-2 mb-5 mt-5 flex  justify-between items-center gap-2">
              <h3 className="text-base font-sk capitalize text-medium-gray">
                {getCollectionTag(landingWallpapers[0].specialities)} Collection
              </h3>
              <button
                className="px-4 py-1 border border-fancy text-fancy-color rounded-sm hover:bg-gray-100 transition-colors text-sm"
                onClick={() =>
                  navigate(`/wallpapers/${getCollectionTag(landingWallpapers[0].specialities)}`)
                }
              >
                Shop Now
              </button>
            </div>
          </>
        )}
      </section>

      {/*  Large Screen Layout */}
      <section className="w-full mt-20 bg-pink-50 overflow-hidden relative hidden md:block">
        <div className="flex flex-row min-h-[500px] relative">
          {/* Left Column */}
          <div className="w-1/3 flex items-end">
            {landingWallpapers[0] && (
              <div className="w-full h-[380px]">
                <img
                  src={landingWallpapers[0].image || "/placeholder.svg"}
                  alt={landingWallpapers[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>

          {/* Center Column */}
          <div className="w-1/3 flex flex-col justify-center px-6 py-6 text-left items-start">
            <h2 className="text-3xl font-sk text-dark-gray">
              Find Your Perfect
              <span className="ml-2 font-nautigal text-fancy-color italic">Wallpaper</span>
            </h2>
            <p className="text-medium-gray mt-4 mb-6 text-base max-w-sm font-sk">
              Whether you crave the warmth of linen textures, the drama of bold patterns,
              or the subtlety of neutrals, our collections adapt to your vision, one roll at a time.
            </p>
            <button
              className="px-4 py-1.5 border border-fancy text-fancy-color font-sk w-max transition-all text-sm rounded"
              onClick={() => navigate("/wallpapers")}
            >
              Discover More Collection
            </button>
          </div>

          {/* Right Column */}
          <div className="w-1/3 flex flex-col">
            {landingWallpapers[1] && (
              <>
                <div className="h-[380px]">
                  <img
                    src={landingWallpapers[1].image || "/placeholder.svg"}
                    alt={landingWallpapers[1].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="px-4 py-2 flex flex-row justify-between items-center gap-2">
                  <h3 className="text-xl font-sk capitalize text-medium-gray">
                    {getCollectionTag(landingWallpapers[1].specialities)} Collection
                  </h3>
                  <button
                    className="px-4 py-1 border border-fancy text-fancy-color rounded-sm hover:bg-gray-100 transition-colors text-sm"
                    onClick={() =>
                      navigate(`/wallpapers/${getCollectionTag(landingWallpapers[1].specialities)}`)
                    }
                  >
                    Shop Now
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {landingWallpapers[0] && (
        <div className="hidden  md:flex w-1/3 px-4 mt-2 flex-row justify-between items-center gap-2">
          <h3 className="text-xl font-sk capitalize text-medium-gray">
            {getCollectionTag(landingWallpapers[0].specialities)} Collection
          </h3>
          <button
            className="px-4 py-1 border border-fancy text-fancy-color rounded-sm hover:bg-gray-100 transition-colors text-sm"
            onClick={() =>
              navigate(`/wallpapers/${getCollectionTag(landingWallpapers[0].specialities)}`)
            }
          >
            Shop Now
          </button>
        </div>
      )}
      </AnimationContainer>
    </>
  );
}

