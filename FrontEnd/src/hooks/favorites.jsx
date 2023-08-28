import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const favoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  async function getFavorites() {
    const { data } = await api.get('/favorites');
    setFavorites(data);
  }

  async function addFavorite(id) {
    try {
      await api.post(`/favorites/${id}`);
      await getFavorites();
    } catch (error) {
      console.log(error);
    }
  }

  async function removeFavorite(id) {
    try {
      await api.delete(`/favorites/${id}`);
      await getFavorites();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getFavorites();
  }, [])

  return (
    <favoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </favoritesContext.Provider>
  )
}

export const useFavorites = () => useContext(favoritesContext);