import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Api from "../pages/api/api";
import Dashbord from "../pages/dashbord";
import Test from "../pages/test";
import Account from '../pages/account/account';
const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Dashbord} exact={true} />
          {/* <Route path="/editExpence/:id" component={ EditExpence } /> */}
          <Route component={Api} />
          <Route path="/test" component={Test} exact={true} />
          <Route path="/account" component={Account} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default AppRouter;
