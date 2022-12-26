import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header.js";
import Navbar from "./components/Navbar/Navbar.js";
import Profile from "./components/Profile/Profile.js";
import Dialogs from "./components/Dialogs/dialogs";
import { BrowserRouter, Route } from "react-router-dom";
function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <Navbar />
        <div className="wrapper-content">
          <Route exact path="/" component={Profile} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/dialogs" component={Dialogs} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
