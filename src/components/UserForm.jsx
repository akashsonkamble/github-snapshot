import React, { useState } from "react";

const UserForm = ({ onUsernameSubmit }) => {
  const [username, setUsername] = useState("");

  const inputChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    onUsernameSubmit(username);
    setUsername("");
  };

  return (
    <form
      onSubmit={submitHandler}
      className="w-10/12 p-4 mt-10 m-auto bg-white border-2 border-white border-radius-2 shadow-lg shadow-black-500/40 shadow-[1px_3px_60px_-9px_rgba(0,0,0,0.3)] rounded-xl"
    >
      <div className="flex justify-center p-4 w-full">
        <label
          className="m-2 text-lg font-medium text-gray-50"
          name="username"
          id="username"
          htmlFor="username"
        >
          Username
        </label>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={inputChangeHandler}
          className="pl-4 w-10/12 border border-gray-50 border-radius-2 active:border-light active:outline-none focus:outline-none focus:shadow-[0_3px_30px_-10px_rgba(0,0,0,0.26)]"
        />
      </div>
      <div className="flex justify-center items-center">
        <button
          type="submit"
          className="bg-dark text-white border-dark text-lg px-10 py-2 rounded-3xl hover:bg-light hover:text-white hover:border-light active:bg-light focus:outline-none"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default UserForm;
