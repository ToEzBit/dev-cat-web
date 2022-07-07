import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Navbar from '../components/navbars/Navbar';
import { motion } from 'framer-motion';
import ProfilePic from '../asset/image/ProfilePic.png';
import {
  devEditProfile,
  userEditProfile,
  userUpdateProfileImage,
  devUpdateProfileImage,
} from '../api/editProfile';
import Toast from '../components/ui/Toast';
import Spinner from '../components/common/Spinner';

function EditProfilePage() {
  const { user, dev } = useAuth();
  const [error, setError] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toast, setToast] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [newProfileImage, setNewProfileImage] = useState();
  const [bankProvider, setBankProvider] = useState('');
  const [bankAccountNumber, setBankAccountNumber] = useState('');
  const [loading, setLoading] = useState(false);

  const refInputImage = useRef();

  useEffect(() => {
    if (user) {
      setFirstName(user.firstName);
      setLastName(user.lastName);
    }
    if (dev) {
      setFirstName(dev.firstName);
      setLastName(dev.lastName);
      setBankProvider(dev.bankProvider);
      setBankAccountNumber(dev.bankAccountNumber);
    }
  }, [user, dev]);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      if (user) {
        await userEditProfile({ firstName, lastName, password });
        if (newProfileImage) {
          await userUpdateProfileImage(newProfileImage);
        }
        clearTimeout(setToast(false));
        setToast(true);
        setToastMessage('Profile updated successfully');
        setTimeout(() => setToast(false), 3000);
      }
      if (dev) {
        await devEditProfile({
          firstName,
          lastName,
          bankProvider,
          bankAccountNumber,
          password,
        });
        if (newProfileImage) {
          await devUpdateProfileImage(newProfileImage);
        }
        clearTimeout(setToast(false));
        setToast(true);
        setToastMessage('Profile updated successfully');
        setTimeout(() => setToast(false), 3000);
      }
    } catch (err) {
      clearTimeout(setError(true));
      setError(true);
      setToastMessage(err.response.data.message);
      setTimeout(() => setError(false), 3000);
    } finally {
      setPassword('');
      setLoading(false);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {loading && <Spinner />}
      <Navbar />
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col">
          <div className="flex justify-start py-5">
            <h3>Profile</h3>
          </div>

          <div className="flex justify-center">
            {newProfileImage ? (
              <div className="avatar">
                <div className="w-48 rounded-full">
                  <img
                    src={
                      newProfileImage
                        ? URL.createObjectURL(newProfileImage)
                        : ''
                    }
                  />
                </div>
              </div>
            ) : (
              <div className="avatar">
                <div className="w-48 rounded-full">
                  <img
                    src={user?.profileImage || dev?.profileImage || ProfilePic}
                  />
                </div>
              </div>
            )}
          </div>
          {/* ========================================================= image Profile ======================================================*/}

          <div className="flex justify-center py-3">
            <button
              className="bg-transparent hover:bg-[#E8E7FF] text-[#5D5FEF] font-semibold hover:text-[#06033A] py-2 px-4 border border-[#9747FF] hover:border-transparent rounded-xl shadow-md "
              onClick={() => refInputImage.current.click()}
            >
              Change Profile Image
            </button>
            <input
              type="file"
              className="hidden"
              ref={refInputImage}
              onChange={(e) => {
                if (e.target.files[0]) {
                  setNewProfileImage(e.target.files[0]);
                }
              }}
            />
          </div>
          {/* ========================================================= button edit Profile ======================================================*/}
          <div>
            {toast ? (
              <div className="flex justify-end">
                <Toast message={toastMessage} status="success" />
              </div>
            ) : null}
            {error ? (
              <div className="flex justify-end">
                <Toast message={toastMessage} />
              </div>
            ) : null}
            <form onSubmit={handleSubmit}>
              <div className="  py-3">
                <label className="block text-[#06033A]  font-bold mb-2 text-sm">
                  Username
                </label>
                <span
                  className="block p-2 my-1 w-full text-[#706D9E]  rounded-lg border border-[#E8E7FF] sm:text-xs"
                  id="username"
                  type="text"
                >
                  {user?.username || dev?.username}
                </span>
              </div>
              <div className=" py-3">
                <label className="block text-[#06033A] font-bold mb-2 text-sm">
                  First Name
                </label>
                <input
                  className="block p-2 my-1 w-full text-[#706D9E]  rounded-lg border border-[#E8E7FF] sm:text-xs "
                  type="text"
                  placeholder="Input First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="  py-3">
                <label className="block text-[#06033A] font-bold mb-2 text-sm">
                  Last Name
                </label>
                <input
                  className="block p-2 my-1 w-full text-[#706D9E]  rounded-lg border border-[#E8E7FF] sm:text-xs "
                  type="text"
                  placeholder="Input Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="py-2">
                <label className="block text-[#06033A] font-bold mb-2 text-sm">
                  Email
                </label>
                <span
                  className="block p-2 my-1 w-full text-[#706D9E]  rounded-lg border border-[#E8E7FF] sm:text-xs"
                  type="text"
                >
                  {user?.email || dev?.email}
                </span>
                {dev ? (
                  <>
                    <div className="  py-3">
                      <label className="block text-[#06033A]  font-bold mb-2 text-sm">
                        Bank Provider
                      </label>
                      <input
                        className="block p-2 my-1 w-full text-[#706D9E]  rounded-lg border border-[#E8E7FF] sm:text-xs"
                        type="text"
                        placeholder="Input Bank Provider"
                        value={bankProvider}
                        onChange={(e) => setBankProvider(e.target.value)}
                      />
                    </div>
                    <div className="  py-3">
                      <label className="block text-[#06033A]  font-bold mb-2 text-sm">
                        Bank Account
                      </label>
                      <input
                        className="block p-2 my-1 w-full text-[#706D9E]  rounded-lg border border-[#E8E7FF] sm:text-xs"
                        type="text"
                        placeholder="Input Bank Account"
                        value={bankAccountNumber}
                        onChange={(e) => setBankAccountNumber(e.target.value)}
                      />
                    </div>
                  </>
                ) : null}

                <div className="  py-3">
                  <label className="block text-[#06033A] font-bold mb-2 text-sm ">
                    Password
                  </label>
                  <input
                    className="block p-2 my-1 w-full text-[#706D9E]  rounded-lg border border-[#E8E7FF] sm:text-xs "
                    type="password"
                    placeholder="Input Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                </div>
                {/* ========================================================= input detail Profile ======================================================*/}
              </div>
              <div className="pb-3">
                <Link
                  className="bg-transparent hover:bg-[#E8E7FF] text-[#5D5FEF] font-semibold hover:text-[#06033A] py-2 px-4 border border-[#9747FF] hover:border-transparent rounded-xl shadow-md  "
                  to="/change-password"
                >
                  change Password
                </Link>
              </div>
              {/* ========================================================= change Password ======================================================*/}
              <div className="flex flex-col  flex-auto text-[#5D5FEF] text-center  px-4 py-2 m-2 gap-1 my-2 mx-5 rounded-lg ">
                <button
                  className="bg-transparent hover:bg-[#E8E7FF] text-[#5D5FEF] font-semibold hover:text-[#06033A] py-2 px-4 border border-[#9747FF] hover:border-transparent rounded-xl shadow-md "
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default EditProfilePage;
