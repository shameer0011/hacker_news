import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Api from "../pages/api/api";
import Dashbord from "../pages/dashbord";
import Test from "../pages/test";
import Account from '../pages/account/account';
import Accountdetails from '../components/account/accountdetails';
import Login from '../components/login/login';
const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Dashbord} exact={true} />
          <Route path="/api" component={Api} exact ={true}/>
          <Route path="/test" component={Test} exact={true} />
          <Route path="/account" component={Account} />
          <Route path="/:name" component={Accountdetails} exact ={true} />
          <Route path="/login/log" component={Login} exact = {true}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default AppRouter;
