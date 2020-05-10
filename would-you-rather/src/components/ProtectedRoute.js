import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const ProtectedRoute = ({
  component: Component,
  authedUser,
  path,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return authedUser !== null ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login2" />
        );
      }}
    />
  );
};

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(ProtectedRoute);
