import { Link } from "react-router-dom";

interface WallpaperCardProps {
  category: string;
  image: string;
  url: string;
}

export default function WallpaperCard({ category, image, url }: WallpaperCardProps) {
  return (
    <Link
      to={url}
      className="w-full sm:w-[calc(25%-12px)] flex flex-col"
    >
      <div className="aspect-[3/4] relative overflow-hidden">
        <img
          src={image}
          alt={category}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent  px-4 py-3">
       
          <h3 className="text-white text-lg font-sk tracking-relaxed">{category}  Collection</h3>
        </div>
      </div>
    </Link>
  );
}
