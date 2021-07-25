import React from "react";
import { Provider } from "react-redux";
import { store } from "../src/redux";
import { useStyles } from "./AppStyle";
import "./AppStyle.js";
import AppRouter from "./routers/appRouter";
// feature1
const App = () => {
  const classes = useStyles();
  return (
    <div className="App">
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
};

export default App;

