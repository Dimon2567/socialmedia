import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;
function Header() {
  return <div className="header">Header</div>;
}
function Navbar() {
  return <div className="Navbar">Navbar</div>;
}
function Profile() {
  return <div className="Profile">Profile</div>;
}
