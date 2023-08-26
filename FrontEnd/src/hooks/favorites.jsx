import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const favoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    async function getFavorites() {
      const { data } = await api.get('/favorites');

      setFavorites(data);
    }

    getFavorites();
  }, [])

  return (
    <favoritesContext.Provider
      value={{
        favorites
      }}
    >
      {children}
    </favoritesContext.Provider>
  )
}

export const useFavorites = () => useContext(favoritesContext);