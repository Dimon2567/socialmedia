import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header.js";
import Navbar from "./components/Navbar/Navbar.js";
import Profile from "./components/Profile/Profile.js";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Navbar />
      <Profile name={"Kostya Ivanov"} />
    </div>
  );
}

export default App;
