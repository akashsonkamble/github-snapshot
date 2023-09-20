import Header from "./components/Header";
import UserForm from "./components/UserForm";
import UserInfo from "./components/UserInfo";

function App() {
  return (
    <>
      <Header />
      <section className="max-w-3xl m-auto">
        <UserForm />
        <UserInfo />
      </section>
    </>
  );
}

export default App;
