import React from 'react';
import ProfilePic from '../asset/image/ProfilePic.png';

function EditProfilePage() {
  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="flex flex-col">
        <div className="flex justify-start py-5">
          <label>Profile</label>
        </div>
        <div></div>
        <div className="flex justify-center">
          <img src={ProfilePic} />
        </div>
        <div className="flex justify-center py-3">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold  rounded">
            Edit Profile
          </button>
        </div>
        <div cla>
          <div className="  py-3">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              className="block p-2 w-full text-gray-900  rounded-lg border border-gray-300 sm:text-xs "
              id="username"
              type="text"
              placeholder="Input Username"
            />
          </div>
          <div className=" py-3">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              First Name
            </label>
            <input
              className="block p-2 w-full text-gray-900  rounded-lg border border-gray-300 sm:text-xs "
              id="FirstName"
              type="text"
              placeholder="Input First Name"
            />
          </div>
          <div className="  py-3">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Last Name
            </label>
            <input
              className="block p-2 w-full text-gray-900  rounded-lg border border-gray-300 sm:text-xs "
              id="LastName"
              type="text"
              placeholder="Input Last Name"
            />
          </div>
          <div className="  py-3">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              className="block p-2 w-full text-gray-900  rounded-lg border border-gray-300 sm:text-xs "
              id="Email"
              type="text"
              placeholder="Input Email"
            />
          </div>
          <div className="  py-3">
            <label className="block text-gray-700 text-sm font-bold ">
              Password
            </label>
          </div>
          <div className="pb-3">
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded shadow-md ">
              Reset Password
            </button>
          </div>
          <div className="py-3">
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded shadow-md ">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfilePage;
