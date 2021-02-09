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

const store = createStore(envState, { count: 0, data: 2 });

const App = () => {
  const connection = getLoginConnector();

  useEffect(() => {
    connection.start();
    setTimeout(() => {
      connection.send("onLoad");
    }, 1000);
  }, []);

  const setStoreCountNumber = (count) => {
    store.dispatch({
      type: "setCurrentConnectionNumber",
      number: parseInt(count),
    });
  };

  connection.on("onLoadConfirm", (s) => {
    setStoreCountNumber(s);
  });

  connection.on("updateCount", (s) => {
    setStoreCountNumber(s);
  });

  return (
    <Provider store={store}>
      <Routing />
    </Provider>
  );
};
export default App;
