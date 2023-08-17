import { createContext, useContext, useState } from "react";

import { api } from "../services/api";
import { toast } from "react-toastify";

export const searchContext = createContext();

function SearchProvider({ children }) {
  const [dishes, setDishes] = useState([]);

  async function getAllDishes() {
    const response = await api.get(`/dishes`);
    setDishes(response.data);
  }

  function searchDishes(searchText) {
    const searchToast = toast.loading("Buscando pratos...");

    api
      .get(`/dishes?title=${searchText}`)
      .then(({ data }) => {
        toast.update(searchToast, {
          render: () => {
            setDishes(data);
            return data.length > 0
              ? "Pratos encontrados!"
              : "Nenhum prato encontrado!";
          },
          type: data.length > 0 ? "success" : "info",
          isLoading: false,
          autoClose: 5000,
          closeOnClick: true,
          closeButton: true,
        });
      })
      .catch(({ data }) => {
        toast.update(searchToast, {
          render: () => `${data.message}`,
          type: "error",
          isLoading: false,
          autoClose: 5000,
          closeOnClick: true,
          closeButton: true,
        });
      });
  }

  return (
    <searchContext.Provider value={{ searchDishes, getAllDishes, dishes }}>
      {children}
    </searchContext.Provider>
  );
}

const useSearch = () => useContext(searchContext);

export { SearchProvider, useSearch };
