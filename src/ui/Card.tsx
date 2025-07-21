


import { Link } from "react-router-dom";

interface CardProps {
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  url: string;
}

export default function Card({
  title,
  price,
  originalPrice,
  image,
  category,
  url
}: CardProps) {
  return (
    <Link to={url} className="w-full sm:w-[calc(25%-12px)] flex flex-col">
      <div className="aspect-[3/4] overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="mt-2 flex flex-col justify-between flex-grow">
        <h2 className="text-dark-gray font-sk text-base leading-relaxed mt-2">{title}</h2>

        <div className="flex items-center gap-2 mt-auto">
          <p className="text-2xl text-fancy-color font-sk">
            ₹{price}
            {category.toLowerCase() === "wallpapers" && (
              <span className="text-2xl text-fancy-color">/roll</span>
            )}
          </p>
          {originalPrice && originalPrice > price && (
            <div className="text-sm text-medium-gray line-through">₹{originalPrice}</div>
          )}
        </div>
      </div>
    </Link>
  );
}
