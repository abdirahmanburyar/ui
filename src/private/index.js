import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import _ from "lodash";
const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector((state) => state.admin.user);
  return (
    <Route
      {...rest}
      render={(props) =>
        !_.isEmpty(auth) ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
