import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/auth/Login";
import Dashboard from "./containers/Dashboard";
import PrivateRoute from "./private";
import Foculties from "./containers/Foculties";
import NotFound from "./containers/NotFound";
import Loading from "./containers/Loading";
import Navbar from "./layouts/Navbar";
import _ from "lodash";
import { useSelector } from "react-redux";
// import IdleTimerScreen from "./IdleTimerScreen";
import "./App.css";
const App = () => {
  const [isLoading, setLoading] = useState(true);
  const auth = useSelector((state) => state.admin.user);
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  });
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {/* {!_.isEmpty(auth) && <IdleTimerScreen />} */}
          {!_.isEmpty(auth) && <Navbar />}
          <Switch>
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute exact path="/foculties" component={Foculties} />
            <PrivateRoute path="*" component={NotFound} />
          </Switch>
        </>
      )}
    </div>
  );
};

export default App;
