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
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  // console.log(user);
  const navigate = useNavigate;

  const fetchMe = async () => {
    try {
      const token = getAccessToken();
      if (token) {
        const resMe = await axios.get('/user/me');
        setUser(resMe.data.user);
      } else {
        const resMe = await axios.get('/dev/me');
        setUser(resMe.data.user);
      }
      setLoading(false);
    } catch (err) {
      removeAccessToken();
      navigate('/login');
    }
  };

  useEffect(() => {
    setLoading(true);

    fetchMe();
  }, []);

  // const login = async (emailOrPhone, password) => {
  //   const res = await axios.post('/user/register', {
  //     emailOrPhone,
  //     password,
  //   });
  //   setAccessToken(res.data.token);
  //   const resMe = await axios.get('users/me');
  //   setUser(resMe.data.user);
  //   return res.data.token;
  // };

  const registerUser = async (email, username, password, confirmPassword) => {
    const res = await axios.post('auth/user/register', {
      email,
      username,
      password,
      confirmPassword,
    });
    setAccessToken(res.data.token);
    const resMe = await axios.get('users/me');
    setUser(resMe.data.user);
  };

  const registerDev = async (email, username, password, confirmPassword) => {
    const res = await axios.post('auth/dev/register', {
      email,
      username,
      password,
      confirmPassword,
    });
    setAccessToken(res.data.token);
    const resMe = await axios.get('dev/me');
    setUser(resMe.data.user);
  };

  const logout = () => {
    removeAccessToken();
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ user, registerUser, registerDev, logout }}>
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
