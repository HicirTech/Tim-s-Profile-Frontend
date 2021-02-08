import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Routing from "./Router/Routing";
import { getLoginConnector } from "./Router/connectConfig";
const App = () => {
  const connection = getLoginConnector();

  const [ReturnInfo, setReturnInfo] = useState(-1);

  useEffect(() => {
    connection.start();

    setTimeout(() => {
      connection.send("onLoad");
    }, 200);
  }, []);

  connection.on("onLoadConfirm", (s) => {
    setReturnInfo(s);
  });

  return (
    <>
      <Routing />
    </>
  );
};
export default App;
