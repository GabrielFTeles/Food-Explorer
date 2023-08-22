import { Routes, Route, Navigate } from "react-router-dom";

import { useAuth } from "../hooks/auth";
import { SearchProvider } from "../hooks/searchContext";
import { CartProvider } from "../hooks/cart";

import { New } from "../pages/New";
import { Edit } from "../pages/Edit";
import { Home } from "../pages/Home";
import { Orders } from "../pages/Orders";
import { Details } from "../pages/Details";

export function App() {
  const { isAdmin } = useAuth();

  return (
    <SearchProvider>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/orders" element={<Orders />} />
          {isAdmin && <Route path="/new" element={<New />} />}
          {isAdmin && <Route path="/edit/:id" element={<Edit />} />}
        </Routes>
      </CartProvider>
    </SearchProvider>
  );
}