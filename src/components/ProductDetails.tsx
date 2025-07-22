

import { useParams } from "react-router-dom";
import wallpapers from "../data/wallpapers.json";
import curtains from "../data/curtains.json";
import blinds from "../data/blinds.json";
import { useCart } from "../ui/CardContext";
import { useState } from "react";
import ProductRatings from "./ProductRatings";

const dataMap: Record<string, any[]> = {
  wallpapers,
  curtains,
  blinds,
};

const categoryLabelMap: Record<string, string> = {
  wallpapers: "Wallpaper",
  curtains: "Curtain",
  blinds: "Blind",
};

export default function ProductDetail() {
  const { category, title } = useParams();
  const { addToCart, removeFromCart, addToWishlist, removeFromWishlist, cart, wishlist } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!category || !title || !dataMap[category]) {
    return <div className="p-12 text-center text-gray-500 text-lg">Invalid product or category.</div>;
  }

  const decodedTitle = decodeURIComponent(title);
  const product = dataMap[category].find((item) => {
    const urlSegments = item.url?.split("/") || [];
    const slug = urlSegments[urlSegments.length - 1];
    return slug === decodedTitle;
  });

  if (!product) {
    return <div className="p-12 text-center text-gray-500 text-lg">Product not found.</div>;
  }

  const inCart = cart.some((item) => item.title === product.title);
  const inWishlist = wishlist.some((item) => item.title === product.title);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Product Card */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Left: Image */}
        <div className="w-full max-w-lg mx-auto">
          <div className="aspect-square overflow-hidden shadow-lg border border-gray-200">
            <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Right: Details */}
        <div className="flex flex-col justify-between gap-6">
          <div className="flex flex-col gap-6">
            <div className="text-sm uppercase tracking-widest text-gray-500 font-medium">
              {categoryLabelMap[category]}
            </div>
            <h1 className="text-3xl font-semibold text-gray-900">{product.title}</h1>
            <div className="flex items-center gap-4 text-xl">
              <span className="text-3xl  text-fancy-color">₹{product.price}.00</span>
              {product.originalPrice && (
                <span className="text-2xl text-medium-gray line-through">₹{product.originalPrice}</span>
              )}
            </div>

            <hr className="border-t border-gray-300" />

            <div>
              <h2 className="text-md font-semibold text-gray-800">Description</h2>
              <p className="text-gray-600 leading-relaxed mt-1">
               {category === "wallpapers" && (
  <>
    Transform your space with our premium, eco-conscious wallpapers. Designed to inspire and elevate any room, our collection features stunning patterns, rich textures, and easy-to-apply materials. Perfect for accent walls, creative interiors, and personal expression.
  </>
)}
{category === "curtains" && (
  <>
    Discover elegance and functionality with our finely woven curtains. Crafted from high-quality fabrics, they offer a perfect balance of light control, privacy, and style. Choose from classic to contemporary designs to match your interior vision.
  </>
)}
{category === "blinds" && (
  <>
    Embrace modern design with our easy-to-install blinds that combine simplicity and sophistication. Whether you prefer subtle shades or bold textures, our blinds offer smooth operation, UV protection, and a sleek finish for any room.
  </>
)}
              </p>
            </div>

            <hr className="border-t border-gray-300" />

            {/* Quantity */}
            <div className="flex items-center justify-between">
              <h2 className="text-md font-semibold text-gray-800">Quantity</h2>
              <select
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="border border-gray-300 rounded px-4 py-2 text-sm"
              >
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>Qty: {n}</option>
                ))}
              </select>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-soft-white px-6 py-2 rounded hover:bg-gray-200 transition">
                Buy Now
              </button>
              <button
                className="bg-fancy-color text-white px-6 py-2 rounded hover:bg-yellow-700 transition"
                onClick={() => inCart ? removeFromCart(product) : addToCart({ ...product, quantity })}
              >
                {inCart ? "Remove from Cart" : "Add to Cart"}
              </button>
              <button
                className="bg-gray-200 text-black px-6 py-2 rounded hover:bg-gray-300 transition"
                onClick={() => inWishlist ? removeFromWishlist(product) : addToWishlist(product)}
              >
                {inWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Ratings + Testimonials */}
      <div className="mt-16 space-y-12">
        <ProductRatings />
        {/* <Testimonials /> */}
      </div>
    </div>
  );
}
