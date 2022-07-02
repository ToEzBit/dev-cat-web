import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../config/axios';
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from '../services/localStorage';
import { devLogin, userLogin } from '../api/auth';
import jwt_decode from 'jwt-decode';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [dev, setDev] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const token = getAccessToken();
        const decoded = jwt_decode(token);
        if (decoded.role === 'user') {
          const res = await axios.get('/user/me');
          setUser(res?.data?.user);
        }
        if (decoded.role === 'dev') {
          const res = await axios.get('/user/me');
          setDev(res?.data?.dev);
        }
      } catch (err) {
        removeAccessToken();
        // console.log(err);
      }
    };
    fetchMe();
  }, []);

  const logout = () => {
    removeAccessToken();
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ logout, setDev, setUser, user, dev }}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => {
  const ctx = useContext(AuthContext);
  return ctx;
};

export default AuthContextProvider;

export { AuthContext, useAuth };
