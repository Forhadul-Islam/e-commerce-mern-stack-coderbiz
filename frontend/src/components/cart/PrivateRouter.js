import React from 'react';
import { useSelector } from 'react-redux';
import {
  Redirect, Route
} from "react-router-dom";




const PrivateRoute = ({children, ...rest}) =>{
    const {user} = useSelector(state => state.userReducer);
    return (
        <Route
          {...rest}
          render={({ location }) =>
            user.clearance ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/auth",
                  state: { from: location }
                }}
              />
            )
          }
        />
      );
}

  export default PrivateRoute;