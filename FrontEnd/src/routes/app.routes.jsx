import { Routes, Route } from "react-router-dom";

import { SearchProvider } from "../hooks/searchContext";

import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { New } from "../pages/New";

export function App() {
  return (
    <SearchProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/new" element={<New />} />
      </Routes>
    </SearchProvider>
  );
}