import { Routes, Route, Navigate } from "react-router-dom";

import { useAuth } from "../hooks/auth";
import { CartProvider } from "../hooks/cart";
import { FavoritesProvider } from "../hooks/favorites";
import { DishesProvider } from "../hooks/dishes";

import { New } from "../pages/New";
import { Edit } from "../pages/Edit";
import { Home } from "../pages/Home";
import { Orders } from "../pages/Orders";
import { Details } from "../pages/Details";
import { Favorites } from "../pages/Favorites";

export function App() {
  const { isAdmin } = useAuth();

  return (
    <DishesProvider>
      <CartProvider>
        <FavoritesProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
            {!isAdmin && <Route path="/orders" element={<Orders />} />}
            {!isAdmin && <Route path="/favorites" element={<Favorites />} />}
            {isAdmin && <Route path="/new" element={<New />} />}
            {isAdmin && <Route path="/edit/:id" element={<Edit />} />}
          </Routes>
        </FavoritesProvider>
      </CartProvider>
    </DishesProvider>
  );
}