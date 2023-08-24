import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

import { BowlFood } from "@phosphor-icons/react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function updateLocalStorage(newCart) {
    localStorage.setItem("@foodexplorer:cart", JSON.stringify(newCart));
  }

  function addToCart({ id, title, price, image, quantity }) {
    const product = cart.find((item) => item.id === id);

    if (product) {
      product.quantity += quantity;
      setCart([...cart]);
      updateLocalStorage([...cart]);
    } else {
      setCart([...cart, { id, title, price, image, quantity }]);
      updateLocalStorage([...cart, { id, title, price, image, quantity }]);
    }

    toast.success("Prato adicionado ao carrinho!", { autoClose: 1500, icon: <BowlFood size={28} fill="#07bc0d"/>, position: "bottom-right" });
  }

  function removeFromCart(id) {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
    updateLocalStorage(newCart);
  }

  function getCartTotalItems() {
    if (!cart.length) return 0;

    return cart.reduce((acc, item) => acc + item.quantity, 0);
  }

  function getCartTotalPrice() {
    if (!cart.length) return 0;

    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }

  useEffect(() => {
    const cart = localStorage.getItem("@foodexplorer:cart");
    if (cart) setCart(JSON.parse(cart));
  }, [])

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      getCartTotalItems,
      getCartTotalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);