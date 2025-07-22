
import { useCart } from "./CardContext";

export default function Wishlist() {
  const { wishlist, removeFromWishlist, addToCart } = useCart();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <ul className="space-y-4">
          {wishlist.map((product, index) => (
            <li
              key={index}
              className="flex items-center justify-between p-4 bg-gray-100 rounded-lg"
            >
              <div className="flex items-center gap-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <p className="font-semibold">{product.title}</p>
                  <p className="text-sm text-gray-600">₹{product.price}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => addToCart(product)}
                  className="text-green-500 hover:underline"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => removeFromWishlist(product)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
