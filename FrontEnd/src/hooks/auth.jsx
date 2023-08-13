import { createContext, useState, useContext, useEffect } from "react";

import { toast } from "react-toastify";

import { api } from "../services/api";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signUp({ name, email, password }) {
    try {
      if (password.length < 6) throw new Error("Password must be at least 6 characters long.");

      await api.post('/users', { name, email, password });
    } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.message);
      }

      if (error.message) {
        throw new Error(error.message);
      }

      throw new Error("Can't create account, please try again later.");
    }
  }

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/sessions', { email, password});

      const { user, token } = response.data;

      localStorage.setItem('@foodexplorer:user', JSON.stringify(user));
      localStorage.setItem('@foodexplorer:token', token);
      
      setData({ user, token });

      api.defaults.headers.Authorization = `Bearer ${token}`;

      return user;

    } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error("Can't sign, please try again later.");
      }
    }
  }

  async function signOut() {
    localStorage.removeItem('@foodexplorer:user');
    localStorage.removeItem('@foodexplorer:token');

    setData({});

    toast.info("You have been logged out.");
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

    setData({ user: JSON.parse(user), token });
  }, []);

  return (
    <AuthContext.Provider 
      value={{
        signIn,
        signOut,
        signUp,
        user: data.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };