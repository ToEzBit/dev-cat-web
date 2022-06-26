import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { devLogin, userLogin } from '../../api/auth';
import { EyeIcon } from '@heroicons/react/solid';
import { EyeOffIcon } from '@heroicons/react/solid';
// error handling // okay
// required input
// protect route check if not have token cant get Chat Page
// window.location.reload()
// checkbox before register

function LoginForm() {
  const [tab, setTab] = useState(true);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

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

      if (tab) {
        await userLogin({ email, password });
      } else {
        await devLogin({ email, password });
      }
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
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
            <h2 className="card-title mx-auto">DevCats</h2>

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
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />

            <div className="divider text-gray-400">OR</div>

            <input
              id="email"
              type="email"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs mb-3"
              onChange={(e) => setEmail(e.target.value)}
              required={true}
            />

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
              href="/forgotpassword"
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
    </>
  );
}

export default LoginForm;
