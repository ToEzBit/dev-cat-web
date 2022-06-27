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

  //   useEffect(() => {
  //     const fetchMe = async () => {
  //       try {
  //         const token = getAccessToken();
  //         if (token) {
  //           const resMe = await axios.get('/users/me');
  //           setUser(resMe.data.user);
  //         }
  //       } catch (err) {
  //         removeAccessToken();
  //         navigate('/login');
  //       }
  //     };

  //     fetchMe();
  //   }, []);

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
