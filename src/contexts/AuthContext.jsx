import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../config/axios';
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from '../services/localStorage';
import { devLogin, userLogin } from '../api/auth';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [role, setRole] = useState(null);
  const [dev, setDev] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const token = getAccessToken();
        if (token) {
          let res;
          if (role === 'user') {
            console.log(role);
            res = await axios.get('/user/me');
            setUser(res.data.user);
          }
          if (role === 'dev') {
            console.log(role);
            res = await axios.get('/dev/me');
            setDev(res.data.dev);
          }
        }
      } catch (err) {
        removeAccessToken();
        navigate('login');
      }
    };
    fetchMe();
  }, []);

  const logout = () => {
    removeAccessToken();
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ logout, setRole }}>
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
