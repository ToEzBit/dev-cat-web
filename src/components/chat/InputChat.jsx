import React from 'react';

function InputChat({ newMessages, setNewMessages, handleSubmit }) {
  return (
    <div>
      <div className="flex input-bordered border rounded-xl p-2 mx-4 items-center gap-4  shadow-2xl shadow-bg-home-content">
        <div className="form-control  grow ">
          <input
            type="text"
            placeholder="Message"
            className=" h-8 input"
            onChange={(e) => setNewMessages(e.target.value)}
            value={newMessages}
          />
        </div>
        <div className="flex gap-2 ">
          <button>
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
