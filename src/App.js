import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import Routing from "./Router/Routing";
import { getLoginConnector } from "./Router/connectConfig";
import { Provider, useDispatch, useSelector } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

function envState(state, action) {
  switch (action.type) {
    case "setCurrentConnectionNumber":
      return { ...state, count: action.number };
    default:
      return state.count;
  }
}
const connection = getLoginConnector();
const store = createStore(envState, { count: 0, data: 2 });

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      connection.send("onLoad").then((e) => {
        console.info(`Connection : ${connection.state} -> ask for init data`);
      });
    }, 5000);
  }, []);

  const setStoreCountNumber = (count) => {
    store.dispatch({
      type: "setCurrentConnectionNumber",
      number: parseInt(count),
    });
  };

  connection.on("onLoadConfirm", (s) => {
    console.log(`on load confirm -> set init people number as ${s}`);
    setStoreCountNumber(s);
  });

  connection.on("updateCount", (s) => {
    console.log("more people coming -> update counter");
    setStoreCountNumber(s);
  });

  return (
    <Provider store={store}>
      <Routing />
    </Provider>
  );
};
export default App;
