import { Routes, Route, Navigate } from "react-router-dom";

import { useAuth } from "../hooks/auth";
import { SearchProvider } from "../hooks/searchContext";

import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { New } from "../pages/New";

export function App() {
  const { isAdmin } = useAuth();

  function AdminRoute({ element: Component }) {
    return isAdmin ? <Component /> : <Navigate to="/" />;
  }

  return (
    <SearchProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        {isAdmin && <Route path="/new" element={<New />} />}
      </Routes>
    </SearchProvider>
  );
}