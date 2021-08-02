import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/homepage/home";
import Dashbord from "../pages/dashbord";
import Test from "../pages/test";
import Account from '../pages/account/account';
import Accountdetails from '../pages/accountdetails/accountdetails';
import Login from '../components/login/login';
const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Dashbord} exact={true} />
          <Route path="/home" component={Home} exact ={true}/>
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
