import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../config/axios';
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from '../services/localStorage';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const logout = () => {
    removeAccessToken();
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ logout }}>{children}</AuthContext.Provider>
  );
}

const useAuth = () => {
  const ctx = useContext(AuthContext);
  return ctx;
};

export default AuthContextProvider;

export { AuthContext, useAuth };
