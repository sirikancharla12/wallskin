
import { useParams } from "react-router-dom";
import wallpapers from "../data/wallpapers.json";
import curtains from "../data/curtains.json";
import blinds from "../data/blinds.json";

const dataMap: Record<string, any[]> = {
  wallpapers,
  curtains,
  blinds,
};

export default function ProductDetail() {
  const { category, title } = useParams();
  

  if (!category || !title || !dataMap[category]) {
    return (
      <div className="p-10 text-center text-gray-600">
        Invalid product or category.
      </div>
    );
  }

  const decodedTitle = decodeURIComponent(title);

  const product = dataMap[category].find(
    (item) => item.title.toLowerCase() === decodedTitle.toLowerCase()
  );

  if (!product) {
    return (
      <div className="p-10 text-center text-gray-600">
        Product not found.
      </div>
    );
  }

  return (
    <div className="p-6 md:p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <img
        src={product.image}
        alt={product.title}
        className="w-full max-w-md rounded-xl shadow-md mb-6"
      />
      <div className="text-lg text-gray-700 mb-2">Price: ₹{product.price}</div>
      {product.originalPrice && (
        <div className="text-gray-500 line-through">
          Original: ₹{product.originalPrice}
        </div>
      )}
      {product.specialities?.length > 0 && (
        <div className="mt-4">
          <h2 className="font-semibold text-lg mb-2">Specialities:</h2>
          <ul className="list-disc list-inside text-gray-600">
            {product.specialities.map((spec: string, index: number) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
