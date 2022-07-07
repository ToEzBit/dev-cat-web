import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { devRegister, userRegister } from '../../api/auth';
import { motion } from 'framer-motion';

function RegisterForm() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const [tab, setTab] = useState(true);
  const [error, setError] = useState(false);

  const handleSubmitRegister = async (e) => {
    try {
      e.preventDefault();

      if (!username) {
        setError(true);
      }
      if (!email) {
        setError(true);
      }
      if (!password) {
        setError(true);
      }
      if (password !== confirmPassword) {
        setError(true);
      }

      if (!checked) {
        setError(true);
      }
      if (tab) {
        await userRegister({ username, email, password, confirmPassword });
      } else {
        await devRegister({ username, email, password, confirmPassword });
      }
      navigate('/');
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="card w-96 bg-base-100 shadow-xl mt-12 mx-auto">
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
            <h2 className="card-title">DevCats</h2>
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
          <div className="divider text-gray-400">OR</div>
          <p className="flex">Sign Up</p>

          {error ? <p className="text-red-500">username is required</p> : null}
          <input
            type="text"
            placeholder="Username"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setUsername(e.target.value)}
          />
          {error ? <p className="text-red-500">email is required</p> : null}
          <input
            type="text"
            placeholder="Email"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setEmail(e.target.value)}
          />

          {error ? <p className="text-red-500">password is required</p> : null}
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setPassword(e.target.value)}
          />

          {error ? (
            <p className="text-red-500">
              password and confirm password did not match
            </p>
          ) : null}
          <input
            type="password"
            placeholder="Confirm Password"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div className="form-control">
            <label className="label cursor-pointer">
              <input
                type="checkbox"
                className="checkbox"
                onChange={(e) => setChecked(!checked)}
              />
              <span className="label-text">I agree with Terms of Service</span>
            </label>
          </div>
          <div className="card-actions">
            {checked ? (
              <>
                <button
                  className="block w-full bg-box-login mt-5 py-2 rounded-lg hover:bg-box-login hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
                  onClick={handleSubmitRegister}
                >
                  Sign Up
                </button>
              </>
            ) : null}
          </div>
          <div className="flex justify-center mt-4">
            <a
              href="/login"
              className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all"
            >
              Already have an Account ? LOG IN
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default RegisterForm;
