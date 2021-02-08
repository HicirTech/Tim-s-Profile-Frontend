import NavBar from "./NavBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Switcher from "./Switcher";
const Routing = (props) => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Switcher />
      </Switch>
    </Router>
  );
};

export default Routing;
