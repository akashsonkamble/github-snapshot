import React from "react";

const UserInfo = ({ user }) => {
  let created_at = new Date(user.created_at).toISOString().split("T")[0];
  return (
    <main className="w-10/12 p-4 mt-10 m-auto bg-white border-2 border-white border-radius-2 shadow-lg shadow-black-500/40 shadow-[1px_3px_60px_-9px_rgba(0,0,0,0.3)] rounded-xl flex justify-center">
      <img
        src={user.avatar_url}
        alt="Avatar"
        className="w-24 h-24 rounded-full"
      />
      <div className="ml-4">
        <h2 className="text-2xl font-bold">{user.login}</h2>
        <p className="text-lg">Name: {user.name}</p>
        <p className="text-lg">No. of public repos: {user.public_repos}</p>
        <p className="text-lg">No. of public gists: {user.public_gists}</p>
        <p className="text-lg">Profile created at: {created_at}</p>
      </div>
    </main>
  );
};

export default UserInfo;
