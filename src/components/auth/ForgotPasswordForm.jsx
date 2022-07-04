import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  sendVerificationEmail,
  changePasswordByEmail,
} from '../../api/auth.js';
import Toast from '../ui/Toast';

function ForgotPasswordForm() {
  const [tab, setTab] = useState(true);
  const [email, setEmail] = useState('');
  const [mode, setMode] = useState();
  const [successSendEmail, setSuccessSendEmail] = useState(false);
  const [key, setKey] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState();
  const [toastStatus, setToastStatus] = useState(false);

  useEffect(() => {
    if (tab) {
      setMode('user');
    } else {
      setMode('dev');
    }
  }, [tab]);

  const handleSendVerifyCode = async () => {
    try {
      if (!email) {
        alert('Please enter your email');
        return;
      }
      const res = await sendVerificationEmail({ email, mode });
      if (res.status === 200) {
        setSuccessSendEmail(true);
        setShowToast(true);
        setToastMessage('Verification code has been sent');
        setToastStatus(true);
        setTimeout(() => setShowToast(false), 3000);
      }
    } catch (err) {
      setToastMessage(err.response.data.message);
      setToastStatus(false);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  const handleChangePassword = async () => {
    try {
      if (!key) {
        alert('Please enter your key');
        return;
      }
      if (!password) {
        alert('Please enter your new password');
        return;
      }
      if (!confirmPassword) {
        alert('Please enter your confirm password');
        return;
      }
      if (password !== confirmPassword) {
        alert('New password and confirm password not match');
        return;
      }
      const res = await changePasswordByEmail({
        email,
        key,
        password,
        confirmPassword,
        mode,
      });
      if ((res.status = 200)) {
        setToastMessage('Password has been changed');
        setToastStatus(true);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      }
    } catch (err) {
      alert(err.response.data.message);
      setToastStatus(false);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };
  return (
    <>
      {showToast ? (
        <>
          <div className="absolute right-0 mx-8">
            <Toast message={toastMessage} status={toastStatus} />
          </div>
        </>
      ) : null}

      <div className="card w-96 bg-base-100 shadow-xl mt-32 mx-auto">
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
            <Link to="/" className="btn btn-ghost text-red-600">
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
            </Link>
          </div>
          <div>
            <p className="font-bold">Forgot your password</p>
            <p>
              DevCats will send a verification code to the email address for
              make sure that you own the account
            </p>
          </div>

          <div className="flex flex-col w-full border-opacity-50">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {successSendEmail && (
              <>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Secret Key</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                    value={key}
                    onChange={(e) => setKey(e.target.value)}
                  />
                  <label className="label">
                    <span className="label-text">New password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label className="label">
                    <span className="label-text">Confirm password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              </>
            )}
          </div>

          <div className="card-actions">
            {successSendEmail ? (
              <>
                <button
                  className="block w-full bg-box-login mt-5 py-2 rounded-lg hover:bg-box-login hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
                  onClick={handleChangePassword}
                >
                  Change Password
                </button>
              </>
            ) : (
              <>
                <button
                  className="block w-full bg-box-login mt-5 py-2 rounded-lg hover:bg-box-login hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
                  onClick={handleSendVerifyCode}
                >
                  Send Verification Code
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPasswordForm;
