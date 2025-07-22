

import  {
  createContext,
  useContext,
  useState,
  
} from "react";
import type { ReactNode } from "react";

interface Product {
  title: string;
  image: string;
  price: number;
  [key: string]: any;
}

interface CartContextType {
  cart: Product[];
  wishlist: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (product: Product) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (product: Product) => {
    setCart((prev) => prev.filter((p) => p.title !== product.title));
  };

  const addToWishlist = (product: Product) => {
    setWishlist((prev) => [...prev, product]);
  };

  const removeFromWishlist = (product: Product) => {
    setWishlist((prev) => prev.filter((p) => p.title !== product.title));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        removeFromCart,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
