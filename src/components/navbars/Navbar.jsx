import React from 'react';
import { Link } from 'react-router-dom';
import ProfilePic from '../../asset/image/ProfilePic.png';
import { motion } from 'framer-motion';
import { useAuth } from '../../contexts/AuthContext';
import NavbarHome from './NavbarHome';
import DropdownNav from '../dropdown/DropdownNav';
import Logo from '../../asset/image/Logo.png';

function Navbar() {
  const ctx = useAuth();
  return (
    <div className="relative pt-2 z-10">
      {/* =========================================  Search  =============================================== */}
      {/* <div className="max-w-screen-2xl mx-auto flex justify-center ">
        <div className="form-control absolute pt-5 hidden md:block">
          <input
            type="text"
            placeholder="Search"
            className="w-96 h-7 input  opacity-50 hover:opacity-100 focus:text-chat placeholder:italic placeholder:text-chat-quotation   opacity-64   input-bordered   shadow-2xl shadow-green-900"
          />
        </div>
      </div> */}
      {/* ========================================= right side =============================================== */}

      <div className="navbar flex gap-4 justify-between md:justify-between px-20 max-w-screen-2xl mx-auto items-center  bg-transparent">
        <div className="flex justify-center">
          <div className="dropdown md:hidden">
            <label tabIndex="0" className="btn btn-ghost btn-circle">
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
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <div>Mobile Application</div>
              </li>
              <li>
                <div>Web Developer</div>
              </li>
              <li>
                <div>All Type</div>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className=" animate-pulse text-text-color-footer  font-medium normal-case text-3xl items-center flex"
          >
            {/* <div className="text-text-orange">&lt;/DevCats&gt;</div> */}
            <img src={Logo} alt="" className=" w-20 h-16 " />
          </Link>
        </div>

        {/* =========================================  left side  =============================================== */}
        <div className="flex-none gap-2 items-center">
          {/* =================  left side MSG ==================== */}
          {ctx.clientChat ? (
            <>
              <div className="navbar-end">
                <Link to="/chatroom" className="btn btn-ghost btn-circle ">
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
                    {/* <span className="badge badge-xs badge-primary indicator-item"></span> */}
                  </div>
                </Link>
              </div>

              {/* =================  left side Noti ==================== */}
              {/* <div className="navbar-end">
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
              </div> */}
              {/* =================  left side Profile ==================== */}
              <DropdownNav />
              {/* <div className="dropdown dropdown-end">
                <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                  <div className="w-12 rounded-full">
                    <img
                      src={ctx.clientChat.profileImage || ProfilePic}
                      alt=""
                    />
                  </div>
                </label>
                <ul
                  tabIndex="0"
                  className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link to="/profile" className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </Link>
                  </li>
                  <li>
                    <div>Settings</div>
                  </li>
                  <li>
                    <Link to="/" onClick={ctx.logout}>
                      Logout
                    </Link>
                  </li>
                </ul>
              </div> */}
            </>
          ) : (
            <>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  to="/login"
                  className="text-text-btn text-base font-extrabold mx-4 hover:text-orange-500"
                >
                  Login
                </Link>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  to="/register"
                  className="text-text-btn text-base font-extrabold mx-4 hover:text-orange-500"
                >
                  Register
                </Link>
              </motion.button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
