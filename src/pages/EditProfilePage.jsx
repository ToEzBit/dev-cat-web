import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfilePic from '../asset/image/ProfilePic.png';

function EditProfilePage() {
  const navigate = useNavigate();
  const handleChangePassword = () => {
    navigate('/change-password');
  };
  const name = useState('name');
  const email = useState('mail@gmail.com');
  const password = useState('123456');
  const [inputData, setInputData] = useState([]);
  const [items, setItems] = useState('');
  const [todoEditing, setTodoEditing] = React.useState(null);
  const [editingText, setEditingText] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newInputData = {
      id: new Date().getTime(),
      text: items,
      completed: false,
    };

    setInputData([...inputData].concat(newInputData));
    setInputData('');
  };

  const editTodo = (id) => {
    const updateTodos = [...inputData].map((items) => {
      if (items.id === id) {
        items.text = editingText;
      }
      return items;
    });
    setItems(updateTodos);
    setTodoEditing(null);
    setEditingText('');
  };

  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="flex flex-col">
        <div className="flex justify-start py-5">
          <h3>Profile</h3>
        </div>

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
          <form onSubmit={handleSubmit}>
            <div className="  py-3">
              <label className="block text-[#06033A]   text-sm font-bold mb-2 text-sm">
                Username
              </label>
              <label
                className="block p-2 my-1 w-full text-[#706D9E]  rounded-lg border border-[#E8E7FF] sm:text-xs"
                // id="username"
                // type="text"
                // placeholder="Input Username"
              >
                {name}
              </label>
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
                onChange={(e) => setEditingText(e.target.value)}
                value={editingText}
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
                onChange={(e) => setEditingText(e.target.value)}
                value={editingText}
              />
            </div>
            <div className="py-2">
              <label className="block text-[#06033A]   text-sm font-bold mb-2 text-sm">
                Email
              </label>
              <label
                className="block p-2 my-1 w-full text-[#706D9E]  rounded-lg border border-[#E8E7FF] sm:text-xs"
                id="Email"
                type="text"
                placeholder="Input Email"
              >
                {email}
              </label>
              <div className="  py-3">
                <label className="block text-[#06033A]   text-sm font-bold mb-2 text-sm">
                  Bank Account
                </label>
                <input
                  className="block p-2 my-1 w-full text-[#706D9E]  rounded-lg border border-[#E8E7FF] sm:text-xs"
                  id="bankAccount"
                  type="text"
                  placeholder="Input Bank Account"
                  onChange={(e) => setEditingText(e.target.value)}
                  value={editingText}
                />
              </div>
              <div className="  py-3">
                <label className="block text-[#06033A]   text-sm font-bold mb-2 text-sm ">
                  Password
                </label>
                <label
                  className="block p-2 my-1 w-full text-[#706D9E]  rounded-lg border border-[#E8E7FF] sm:text-xs "
                  id="Password"
                  type="password"
                  placeholder="Input Password"
                  onChange={(e) => setEditingText(e.target.value)}
                  value={editingText}
                >
                  {password}
                </label>
              </div>
              {/* ========================================================= input detail Profile ======================================================*/}
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
              <button
                className="bg-transparent hover:bg-[#E8E7FF] text-[#5D5FEF] font-semibold hover:text-[#06033A] py-2 px-4 border border-[#9747FF] hover:border-transparent rounded-xl shadow-md "
                onClick={() => setEditingText(items.id)}
              >
                Submit
              </button>
            </div>
          </form>
          {/* {inputData.map((items) => <div key={items.id}>
              <div>{items.text}</div>
              </div>
          )} */}
        </div>
      </div>
    </div>
  );
}

export default EditProfilePage;
