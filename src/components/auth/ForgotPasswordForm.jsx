import { React } from 'react';
import { useNavigate } from 'react-router-dom';

function ForgotPasswordForm() {
  const navigate = useNavigate();
  const handleSendVeriCode = () => {
    navigate('/changepassword');
  };
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl mt-32 mx-auto">
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
                id="email"
                type="email"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>

          <div className="card-actions">
            <button
              className="block w-full bg-box-login mt-5 py-2 rounded-lg hover:bg-box-login hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
              onClick={handleSendVeriCode}
            >
              Send Verification Code
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPasswordForm;
