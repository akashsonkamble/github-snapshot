import React from "react";

const UserForm = () => {
  return (
    <form className="w-10/12 p-4 mt-10 m-auto bg-white border-2 border-white border-radius-2 shadow-lg shadow-black-500/40 shadow-[0_3px_60px_-9px_rgba(0,0,0,0.3)] rounded-xl">
      <div className="flex justify-center p-4 w-full">
        <label className="m-2 text-lg font-medium text-gray-50" htmlFor="username">
          Username
        </label>
        <input
          type="text"
          className="pl-4 w-10/12 border border-slate-50 border-radius-2 "
        />
      </div>
      <div className="flex justify-center items-center">
        <button className="bg-dark text-white border-dark text-lg px-10 py-2 rounded-3xl hover:bg-light hover:text-white hover:border-light active:bg-light focus:outline-none">
          Submit
        </button>
      </div>
    </form>
  );
};

export default UserForm;
