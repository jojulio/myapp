import views from '../../../components/Views';

const USER = {
	component: views.User,
	path: '/user',
};

const SHOWUSER = {
	component: views.ShowUser,
	path: '/user/:id',
};

const DASHBOARD = {
	component: views.Dashboard,
	path: '/',
};

const NOTFOUND = {
	component: views.NotFound,
	path: '*'
}

export default [USER, SHOWUSER, DASHBOARD, NOTFOUND];