import NavBar from "./NavBar";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Switcher from "./Switcher";
import { useContext } from "react";

const Routing = (props) => {
  return (
    <>
   
      <Router>
        <NavBar />
        <Switch>
          <Switcher />
        </Switch>
      </Router>
    </>
  );
};

export default Routing;
