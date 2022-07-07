import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { devLogin, userLogin } from '../../api/auth';
import { EyeIcon } from '@heroicons/react/solid';
import { EyeOffIcon } from '@heroicons/react/solid';
import { useAuth } from '../../contexts/AuthContext';
import { motion } from 'framer-motion';
import axios from '../../config/axios';

function LoginForm() {
  const { setRole, setDev, setUser } = useAuth();
  const [tab, setTab] = useState(true);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [apiError, setApiError] = useState(false);

  const [password, setPassword] = useState({
    password: '',
    showPassword: false,
  });

  const [passwordType, setPasswordType] = useState('password');

  const togglePassword = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
      return;
    }
    setPasswordType('password');
  };

  const handleSubmitLogin = async (e) => {
    try {
      e.preventDefault();
      if (!email) {
        setError(true);
      }
      if (!password) {
        setError(true);
      }

      if (tab) {
        await userLogin({ email, password });
        const res = await axios.get('/user/me');
        setUser(res?.data?.user);
      } else {
        await devLogin({ email, password });
        const res = await axios.get('/dev/me');
        setDev(res?.data?.dev);
      }
      navigate('/');
    } catch (err) {
      setApiError(err.response.data.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="card w-96 bg-base-100 shadow-xl mt-20 mx-auto">
        <div className="tabs">
          <button
            href="/"
            className={`tab tab-lifted ${tab ? 'tab-active' : ''}`}
            onClick={() => setTab(!tab)}
          >
            User
          </button>
          <button
            href="/"
            className={`tab tab-lifted ${tab ? '' : 'tab-active'}`}
            onClick={() => setTab(!tab)}
          >
            Developer
          </button>
        </div>

        <div className="card-body">
          <div className="flex justify-between">
            {tab ? <h2 className="card-title ml-28">DevCats</h2> : null}
            {tab ? null : <h2 className="card-title ml-28">Developer</h2>}

            <a href="/" className="btn btn-ghost text-red-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 20 20"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </a>
          </div>

          <p>LOGIN</p>

          <div className="flex flex-col w-full border-opacity-50">
            {/* <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />

            <div className="divider text-gray-400">OR</div> */}

            {error ? <p className="text-red-500">email is required</p> : null}
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs mb-3"
              onChange={(e) => setEmail(e.target.value)}
            />

            {error ? (
              <p className="text-red-500">password is required</p>
            ) : null}
            <div className="flex">
              <input
                placeholder="password"
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setPassword(e.target.value)}
                type={passwordType}
                name="password"
              />
              <button className="absolute mt-4 ml-72" onClick={togglePassword}>
                {passwordType === 'password' ? (
                  <EyeOffIcon className="h-5 font-extraLight" />
                ) : (
                  <EyeIcon className="h-5 font-extraLight" />
                )}
              </button>
            </div>
          </div>

          {apiError ? (
            <p className="text-red-500">Email or password is incorrect</p>
          ) : null}
          <div className="card-actions">
            <button
              type="submit"
              className="block w-full bg-box-login mt-5 py-2 rounded-lg hover:bg-box-login hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
              onClick={handleSubmitLogin}
            >
              LOG IN
            </button>
          </div>

          <div className="flex justify-between mt-4">
            <a
              href="/forgot-password"
              className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all"
            >
              Forgot Password ?
            </a>

            <a
              href="/register"
              className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all"
            >
              Don't have an account yet?
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default LoginForm;
