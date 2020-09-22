import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './privateRoute';
import viewsPrivate from './Views/private';
import viewsPublic from './Views/public';

const routeViewsPrivate = viewsPrivate.map(({path, component}) => <PrivateRoute key={path} path={path} component={component} exact />);
const routeViewsPublic = viewsPublic.map(({path, component}) => <Route key={path} path={path} component={component} exact />);

const Routes = () => (
	<BrowserRouter>
		<Switch>
			{routeViewsPublic} 
			{routeViewsPrivate}
		</Switch>
 	</BrowserRouter>
);

export default Routes;
