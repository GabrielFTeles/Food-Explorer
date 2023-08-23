import { createContext, useState, useContext, useEffect } from "react";
import jwtDecode from 'jwt-decode';

import { toast } from "react-toastify";

import { api } from "../services/api";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signUp({ name, email, password }) {
    try {
      if (password.length < 6) throw new Error("A senha precisa ter pelo menos 6 digitos.");

      await api.post('/users', { name, email, password });
    } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.message);
      }

      if (error.message) {
        throw new Error(error.message);
      }

      throw new Error("Não foi possível criar uma conta, por favor tente novamente.");
    }
  }

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/sessions', { email, password});

      const { user, token } = response.data;

      localStorage.setItem('@foodexplorer:user', JSON.stringify(user));
      localStorage.setItem('@foodexplorer:token', token);

      const { isAdmin } = jwtDecode(token);
      
      setData({ user, token, isAdmin: +isAdmin });

      api.defaults.headers.Authorization = `Bearer ${token}`;

      return user;

    } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error("Não foi possível entrar, por favor tente novamente mais tarde.");
      }
    }
  }

  async function signOut() {
    localStorage.removeItem('@foodexplorer:user');
    localStorage.removeItem('@foodexplorer:token');
    localStorage.removeItem('@foodexplorer:cart');

    setData({});

    toast.info("Até mais, volte sempre", {
      icon: "👋"
    });
  }

  useEffect(() => {
    const user = localStorage.getItem('@foodexplorer:user');
    const token = localStorage.getItem('@foodexplorer:token');

    if (!user || !token) {
      localStorage.removeItem('@foodexplorer:user');
      localStorage.removeItem('@foodexplorer:token');
      return;
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;

    const { isAdmin } = jwtDecode(token);

    setData({ user: JSON.parse(user), token, isAdmin: +isAdmin });
  }, []);

  return (
    <AuthContext.Provider 
      value={{
        signIn,
        signOut,
        signUp,
        user: data.user,
        isAdmin: data.isAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };