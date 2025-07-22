// src/components/Cart.tsx

import { useCart } from "./CardContext";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {cart.map((product, index) => (
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
              <button
                onClick={() => removeFromCart(product)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
