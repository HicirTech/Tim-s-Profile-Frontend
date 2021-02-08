import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Chat from "../Pages/Chat";
import Home from "../Pages/Home";

const Switcher = (props) => {
  return (
    <>
      <Route path="/Home">
        <Home />
      </Route>

      <Route path="/Chat">
        <Chat />
      </Route>
    </>
  );
};

export default Switcher;
