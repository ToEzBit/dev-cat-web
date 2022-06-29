import React from 'react';

function ChatHeader({ profile, user }) {
  return (
    <div>
      <div className="border-b p-4 px-8  flex items-center gap-4">
        <img src={profile} className="w-12" />
        <strong className="">{user.username}</strong>
        {/* <strong className="">Logged in as {user}</strong> */}
      </div>
    </div>
  );
}

export default ChatHeader;
