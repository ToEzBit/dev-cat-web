import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProfilePic from '../asset/image/ProfilePic.png';

function EditProfilePage() {
  const navigate = useNavigate();
  const handleChangePassword = () => {
    navigate('/change-password');
  };
  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="flex flex-col">
        <div className="flex justify-start py-5">
          <h3>Profile</h3>
        </div>
        <div></div>
        <div className="flex justify-center">
          <img src={ProfilePic} />
        </div>
        {/* ========================================================= image Profile ======================================================*/}

        <div className="flex justify-center py-3">
          <button className="bg-transparent hover:bg-[#E8E7FF] text-[#5D5FEF] font-semibold hover:text-[#06033A] py-2 px-4 border border-[#9747FF] hover:border-transparent rounded-xl shadow-md ">
            Edit Profile
          </button>
        </div>
        {/* ========================================================= button edit Profile ======================================================*/}
        <div>
          <div className="  py-3">
            <label className="block text-[#06033A]   text-sm font-bold mb-2 text-sm">
              Username
            </label>
            <input
              className="block p-2 my-1 w-full text-[#706D9E]  rounded-lg border border-[#E8E7FF] sm:text-xs"
              id="username"
              type="text"
              placeholder="Input Username"
            />
          </div>
          <div className=" py-3">
            <label className="block text-[#06033A]   text-sm font-bold mb-2 text-sm">
              First Name
            </label>
            <input
              className="block p-2 my-1 w-full text-[#706D9E]  rounded-lg border border-[#E8E7FF] sm:text-xs "
              id="FirstName"
              type="text"
              placeholder="Input First Name"
            />
          </div>
          <div className="  py-3">
            <label className="block text-[#06033A]   text-sm font-bold mb-2 text-sm">
              Last Name
            </label>
            <input
              className="block p-2 my-1 w-full text-[#706D9E]  rounded-lg border border-[#E8E7FF] sm:text-xs "
              id="LastName"
              type="text"
              placeholder="Input Last Name"
            />
          </div>
          <div className="  py-3">
            <label className="block text-[#06033A]   text-sm font-bold mb-2 text-sm">
              Email
            </label>
            <input
              className="block p-2 my-1 w-full text-[#706D9E]  rounded-lg border border-[#E8E7FF] sm:text-xs"
              id="Email"
              type="text"
              placeholder="Input Email"
            />
            {/* ========================================================= input detail Profile ======================================================*/}
          </div>
          <div className="  py-3">
            <label className="block text-[#06033A]   text-sm font-bold mb-2 text-sm ">
              Password
            </label>
          </div>
          <div className="pb-3">
            <button
              className="bg-transparent hover:bg-[#E8E7FF] text-[#5D5FEF] font-semibold hover:text-[#06033A] py-2 px-4 border border-[#9747FF] hover:border-transparent rounded-xl shadow-md  "
              onClick={handleChangePassword}
            >
              change Password
            </button>
          </div>
          {/* ========================================================= change Password ======================================================*/}
          <div className="flex flex-col  flex-auto text-[#5D5FEF] text-center  px-4 py-2 m-2 gap-1 my-2 mx-5 rounded-lg ">
            <button className="bg-transparent hover:bg-[#E8E7FF] text-[#5D5FEF] font-semibold hover:text-[#06033A] py-2 px-4 border border-[#9747FF] hover:border-transparent rounded-xl shadow-md ">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfilePage;
