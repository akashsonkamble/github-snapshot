import { useState } from "react";
import Header from "./components/Header";
import UserForm from "./components/UserForm";
import UserInfo from "./components/UserInfo";

function App() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const fetchUserData = async (username) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error("GitHub user not found.");
      }
      const data = await response.json();
      setUserData(data);
      setError(null);
    } catch (error) {
      setError(error.message);
      setUserData(null);
    }
  };

  return (
    <>
      <Header />
      <section className="max-w-3xl m-auto">
        <UserForm onUsernameSubmit={fetchUserData} />
        {error ? <p className="text-center m-4 font-medium">{error}</p> : null}
        {userData ? <UserInfo user={userData} /> : null}
      </section>
    </>
  );
}

export default App;
