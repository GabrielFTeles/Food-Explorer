import { createContext, useContext, useState  } from 'react';

import { api } from '../services/api';
import { toast } from 'react-toastify';

export const searchContext = createContext();

function SearchProvider({ children }) {
  const [dishes, setDishes] = useState([]);

  async function getDishes(searchText) {
    toast.promise(
      api.get(`/dishes?title=${searchText}`),
      {
        pending: 'Buscando pratos...',
        success: {
          render({ data: { data } }) {
            setDishes(data);
            return data.length > 0 ? 'Pratos encontrados!' : 'Nenhum prato encontrado!';
          }
        },
        error: {
          render({ data }) {
            return `${data.message}` ;
          }
        }
      }
    );
  }

  return (
      <searchContext.Provider value={{ getDishes, dishes }}>
          {children}
      </searchContext.Provider>
  );
}

const useSearch = () => useContext(searchContext);

export { SearchProvider, useSearch };
