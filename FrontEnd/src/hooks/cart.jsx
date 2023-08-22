import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart({ id, name, price, image, quantity }) {
    const product = cart.find((item) => item.id === id);

    if (product) {
      product.quantity += quantity;
      setCart([...cart]);
    } else {
      setCart([...cart, { id, name, price, image, quantity }]);
    }
  }

  function getCartTotalItems() {
    if (!cart.length) return 0;

    return cart.reduce((acc, item) => acc + item.quantity, 0);
  }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      getCartTotalItems
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);