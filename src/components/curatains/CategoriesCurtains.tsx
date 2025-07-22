

import { useState } from "react";
import AnimationContainer from "../../ui/AnimationContainer";
import SectionHeaderWithButton from "../../ui/SectionHeader";
import WallpaperCard from "../../ui/WallpaperCard";
import Wallpapers from "../../data/curtaincategories.json";
import DotCarousel from "../../ui/DotCorosouel";

export default function WallpaperCategoriesComponent() {
  const wallpapers = Wallpapers;
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;

  const next = () => {
    if (startIndex + itemsPerPage < wallpapers.length) {
      setStartIndex((prev) => prev + itemsPerPage);
    }
  };

  const prev = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex((prev) => prev - itemsPerPage);
    }
  };

  const currentItems = wallpapers.slice(startIndex, startIndex + itemsPerPage);

  return (
    <AnimationContainer>
      <section className="mx-4 sm:mx-10 my-10">
        <SectionHeaderWithButton
          titleMain="Shop by"
          titleAccent="Categories"
          buttonLabel="All Collections"
          buttonHref="/curtains/all"
        />

        <div className="sm:hidden mt-10">
          <DotCarousel>
            {wallpapers.map((item, idx) => (
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
        <div className="hidden sm:block mt-10 relative">
          {/* Images */}
          <div className="flex gap-4">
            {currentItems.map((item, idx) => (
              <WallpaperCard
                key={idx}
                category={item.category}
                image={item.image}
                url={item.url}
              />
            ))}
          </div>

          {/* Navigation Buttons over the images */}
          <button
            onClick={prev}
            disabled={startIndex === 0}
            className="absolute top-1/2 left-[-20px] -translate-y-1/2 p-2 bg-black text-white rounded-full hover:bg-gray-800 disabled:opacity-50"
          >
            &lt;
          </button>

          <button
            onClick={next}
            disabled={startIndex + itemsPerPage >= wallpapers.length}
            className="absolute top-1/2 right-[-20px] -translate-y-1/2 p-2 bg-black text-white rounded-full hover:bg-gray-800 disabled:opacity-50"
          >
            &gt;
          </button>
        </div>
      </section>
    </AnimationContainer>
  );
}
