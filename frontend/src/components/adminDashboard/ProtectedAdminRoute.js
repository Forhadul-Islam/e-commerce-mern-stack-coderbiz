import React from 'react';
import { useSelector } from 'react-redux';
import {
  Redirect, Route
} from "react-router-dom";




const ProtectedAdminRoute = ({children, ...rest}) =>{
    const {user} = useSelector(state => state.userReducer);


    return (
        <Route
          {...rest}
          render={({ location }) =>
          user.clearance === 'admin' ? (
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

  export default ProtectedAdminRoute;