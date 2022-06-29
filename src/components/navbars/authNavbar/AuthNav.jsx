import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import ProfilePic from '../../../asset/image/ProfilePic.png';

function AuthNav() {
  const { user, logout } = useContext(AuthContext);

  console.log(user);
  return (
    <>
      {user ? (
        <div className="flex-none gap-2 items-center duration-500">
          {/* =================  left side MSG ==================== */}
          <div className="navbar-end">
            <Link
              // to={`/chatroom/${user.id}`}
              to="/chatroom"
              className="btn btn-ghost btn-circle "
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="black"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </Link>
          </div>
          {/* =================  left side Noti ==================== */}
          <Link to="/main-chatdev">
            <div className="navbar-end">
              <button className="btn btn-ghost btn-circle ">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                  <span className="badge badge-xs badge-primary indicator-item"></span>
                </div>
              </button>
            </div>
          </Link>
          {/* =================  left side Profile ==================== */}
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-12 rounded-full">
                <img src={user.profileImage || ProfilePic} alt="" />
              </div>
            </label>
            <ul
              tabIndex="0"
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <div className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </div>
              </li>
              <li>
                <div>Settings</div>
              </li>
              <li>
                <a href="/" onClick={logout}>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="flex-none gap-2">
          <nav className="flex gap-4 items-baseline text-chat">
            <div>
              <Link
                className="box text-base font-bold hover:opacity-50 duration-500"
                to="/register"
              >
                REGISTER
              </Link>
            </div>
            <Link
              className="box text-base font-bold hover:opacity-50 duration-500"
              to="/login"
            >
              LOGIN
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}

export default AuthNav;

// col-start-3 grid gap-4  grid-cols-2
