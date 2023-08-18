import { Routes, Route, Navigate } from "react-router-dom";

import { useAuth } from "../hooks/auth";
import { SearchProvider } from "../hooks/searchContext";

import { New } from "../pages/New";
import { Edit } from "../pages/Edit";
import { Home } from "../pages/Home";
import { Details } from "../pages/Details";

export function App() {
  const { isAdmin } = useAuth();

  return (
    <SearchProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        {isAdmin && <Route path="/new" element={<New />} />}
        {isAdmin && <Route path="/edit/:id" element={<Edit />} />}
      </Routes>
    </SearchProvider>
  );
}