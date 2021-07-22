import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/header/header";
import NotFound from "../components/notfound";
import Order from "../components/Order/order";
import Dashbord from "../pages/dashbord";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Dashbord} exact={true} />
          {/* <Route path="/editExpence/:id" component={ EditExpence } /> */}
          <Route path="/addOrder" component={Order} />
          <Route path="/header" component={Header} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default AppRouter;
