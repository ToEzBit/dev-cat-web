import axios from '../../config/axios';
import React, { useRef } from 'react';
import { useState } from 'react';

function InputChat({ newMessages, setNewMessages, handleSubmit }) {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    inputEl.current.click(uploadImage);
  };
  const [imageSelected, setImageSelected] = useState('');
  const [getImage, setGetImage] = useState('');

  // console.log(imageSelected[0].name);
  const instance = axios.create();
  delete instance.defaults.headers.common['Authorization'];

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append('file', imageSelected[0]);
    formData.append('upload_preset', 'v8scg9cm');
    // formData.append('cloud_name', 'dmu2skvrn');

    await instance
      .post('https://api.cloudinary.com/v1_1/dmu2skvrn/image/upload', formData)
      .then((response) => {
        setGetImage(response.data.url);
      });
  };
  return (
    <div>
      <div className="flex input-bordered border  rounded-xl p-2 mx-4 items-center gap-4  shadow-2xl shadow-bg-home-content">
        <div className="form-control  grow ">
          <input
            className=""
            type="file"
            ref={inputEl}
            onChange={(event) => {
              setImageSelected(event.target.files[0]);
            }}
          />
          <div
            className={
              imageSelected
                ? 'border visible  border-text-orange left-[70%] rounded-xl right-[0%] p-4 absolute bottom-[70%] h-48 w-48 z-10 duration-300'
                : 'border invisible border-text-orange left-[70%] rounded-xl right-[0%] p-4 absolute bottom-[70%] h-48 w-48 z-10 duration-300'
            }
          >
            <img
              className="w-full h-full  border bg-black rounded-xl object-cover  border-gray-800"
              src={imageSelected ? URL.createObjectURL(imageSelected) : null}
            ></img>
          </div>
          {/* <img
            src={imageSelected ? URL.createObjectURL(imageSelected) : null}
            className=" w-40 h40"
            alt=""
          /> */}
          {/* <button
            onClick={() => {
              uploadImage();
            }}
          >
            {' '}
            Upload
          </button> */}
          <input
            type="text"
            placeholder="Message"
            className=" h-8 input"
            onChange={(e) => setNewMessages(e.target.value)}
            value={newMessages}
          />
        </div>
        <div className="flex gap-2 ">
          <button onClick={onButtonClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6  "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
              />
            </svg>
          </button>
          <button onClick={handleSubmit}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 stroke-chat"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default InputChat;
