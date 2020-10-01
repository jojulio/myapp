import React from 'react';
import { isAuthenticated, getUser, isExpired, renovateToken } from '../../services/auth';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, roles, ...rest }) => {
    return (
        <Route 
            {...rest} 
            render = { 
                props => {
                    const currentUser = JSON.parse(getUser());
                    if (isExpired()) {
                        renovateToken();
                    }
                    if (!isAuthenticated()) {
                        return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
                    }

                    if (roles && roles.indexOf(currentUser.permission) === -1) {
                        return <Redirect to={{ pathname: '/'}} />
                    }

                    return <Component {...props} />
                }
            } 
        />
    ); 
}

export default PrivateRoute;