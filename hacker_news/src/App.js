import React from "react";
import { Provider } from "react-redux";
import ConfigureStore from "../src/store/configureStore";
import { useStyles } from "./AppStyle";
import "./AppStyle.js";
import AppRouter from "./routers/appRouter";
// feature1
const App = () => {
  const store = ConfigureStore();
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

