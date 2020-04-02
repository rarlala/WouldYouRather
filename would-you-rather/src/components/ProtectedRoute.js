import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const ProtectedRoute = ({
  component: Component,
  authedUser,
  path,
  ...rest
}) => {
  console.log('정보확인', { component: Component, authedUser, path, ...rest });
  console.log('정보확인 path', { path });

  return (
    <Route
      {...rest}
      render={props => {
        return authedUser !== 'null' ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" props={path} />
        );
      }}
    />
  );
};

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(ProtectedRoute);
