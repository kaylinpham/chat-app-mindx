import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      auth ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/log-in",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);
export default ProtectedRoute;
