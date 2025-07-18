
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

interface DotCarouselProps {
  children: React.ReactNode[];
}

export default function DotCarousel({ children }: DotCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;

    const onScroll = () => {
      const scrollLeft = scrollEl.scrollLeft;
      const childWidth = scrollEl.clientWidth;
      const newIndex = Math.round(scrollLeft / childWidth);
      setCurrentIndex(newIndex);
    };

    scrollEl.addEventListener("scroll", onScroll);
    return () => scrollEl.removeEventListener("scroll", onScroll);
  }, []);

  const goToSlide = (index: number) => {
    const scrollEl = scrollRef.current;
    if (scrollEl) {
      const width = scrollEl.clientWidth;
      scrollEl.scrollTo({
        left: width * index,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full sm:hidden"> {/* Only visible on small screens */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
      >
        {children.map((child, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 snap-center px-2"
          >
            {child}
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {children.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={clsx(
              "w-3 h-3 rounded-full",
              index === currentIndex ? "bg-black" : "bg-gray-300"
            )}
          />
        ))}
      </div>
    </div>
  );
}
