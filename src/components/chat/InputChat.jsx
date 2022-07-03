import axios from '../../config/axios';
import React, { useRef } from 'react';
import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function InputChat({
  newMessages,
  setNewMessages,
  handleSubmit,
  currentChat,
  socket,
  setMessages,
  messages,
}) {
  const ctx = useAuth();
  const inputEl = useRef(null);
  const onButtonClick = () => {
    inputEl.current.click(uploadImage);
  };
  const [imageSelected, setImageSelected] = useState('');
  const [getImage, setGetImage] = useState('');

  console.log(getImage);
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

  const handleSubmitImage = async (e) => {
    e.preventDefault();
    const message = {
      sender: ctx.user.id,
      message: getImage,
      conversationId: currentChat.id,
    };

    const receiverId =
      currentChat.senderId == ctx.user.id
        ? currentChat.receiverId
        : currentChat.senderId;

    socket.current.emit('sendMessage', {
      senderId: ctx?.user.id,
      receiverId,
      message: getImage,
    });

    try {
      const res = await axios.post('/messages', message);
      setMessages([...messages, res.data]);
      setNewMessages('');
    } catch (err) {
      console.log(err);
    }
  };
  const handleUploadImg = async () => {
    try {
      const formData = new FormData();
      formData.append('file', imageSelected[0]);
      formData.append('upload_preset', 'v8scg9cm');
      // formData.append('cloud_name', 'dmu2skvrn');
      await instance
        .post(
          'https://api.cloudinary.com/v1_1/dmu2skvrn/image/upload',
          formData,
        )
        .then((response) => {
          setGetImage(response.data.url);
        });

      if (getImage) {
        const message = {
          sender: ctx.user.id,
          message: getImage,
          conversationId: currentChat.id,
        };

        const receiverId =
          currentChat.senderId == ctx.user.id
            ? currentChat.receiverId
            : currentChat.senderId;

        socket.current.emit('sendMessage', {
          senderId: ctx?.user.id,
          receiverId,
          message: getImage,
        });

        try {
          const res = await axios.post('/messages', message);
          setMessages([...messages, res.data]);
          setNewMessages('');
          setGetImage('');
          setImageSelected('');
        } catch (err) {
          console.log(err);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="flex input-bordered border rounded-xl p-2 mx-4 items-center gap-4  shadow-2xl shadow-bg-home-content">
        <div className="form-control  grow ">
          <input
            className="w-0 h-0"
            type="file"
            ref={inputEl}
            onChange={(event) => {
              setImageSelected(event.target.files);
            }}
          />

          <input
            type="text"
            placeholder="Message"
            className=" h-8 input"
            onChange={(e) => setNewMessages(e.target.value)}
            value={newMessages}
          />
        </div>
        <div className="flex relative gap-2 ">
          {imageSelected[0] ? (
            <div
              data-aos="fade-up"
              className=" absolute w-48 h-48 duration-300 bg-white rounded-xl bottom-12 p-2 right-0"
            >
              <img
                src={
                  imageSelected
                    ? URL.createObjectURL(imageSelected[0])
                    : URL.createObjectURL(null)
                }
                onClick={handleUploadImg}
                className="w-full rounded-xl h-full border"
                alt=""
              />
            </div>
          ) : null}

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
