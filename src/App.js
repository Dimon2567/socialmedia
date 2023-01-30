import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header.js";
import Navbar from "./components/Navbar/Navbar.js";
import Profile from "./components/Profile/Profile.js";
import Dialogs from "./components/Dialogs/dialogs";
import { BrowserRouter, Route } from "react-router-dom";
function App(props) {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <Navbar navbar={props.state.navbar} />
        <div className="wrapper-content">
          <Route
            exact
            path="/"
            render={() => (
              <Profile
                postdata={props.state.profilePage.postdata}
                addPost={props.addPost}
              />
            )}
          />
          <Route
            exact
            path="/profile"
            render={() => (
              <Profile
                postdata={props.state.profilePage.postdata}
                addPost={props.addPost}
              />
            )}
          />
          <Route
            exact
            path="/dialogs"
            render={() => (
              <Dialogs
                dialognames={props.state.dialogsPage.dialognames}
                messageitem={props.state.dialogsPage.messageitem}
              />
            )}
          />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
