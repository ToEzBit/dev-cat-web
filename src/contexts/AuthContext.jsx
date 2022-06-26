import { createContext, useContext } from 'react';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  //   const [user, setUser] = useState(null);
  //   const navigate = useNavigate();

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

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}

const useAuth = () => {
  const ctx = useContext(AuthContext);
  return ctx;
};

export default AuthContextProvider;

export { AuthContext, useAuth };
