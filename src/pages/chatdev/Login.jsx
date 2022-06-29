import React from 'react';

function Login({ newUser, setNewUser, logNewUser }) {
  const handleChange = ({ currentTarget: input }) => {
    setNewUser(input.value);
  };

  return (
    <>
      <div className="flex flex-col justify-center gap-8 mt-40">
        <h1 className=" text-chat">Enter Username</h1>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="username"
            value={newUser}
            placeholder="Username"
            className="border rounded-lg p-1 px-4"
            onChange={(e) => handleChange(e)}
            onKeyPress={(e) => (e.code === 'Enter' ? logNewUser() : null)}
          />
          <button
            onClick={logNewUser}
            className=" border text-stone-50 bg-emerald-500 px-4 rounded-lg"
          >
            Join!
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
