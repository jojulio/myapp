import views from '../../../components/Views';

const USER = {
	component: views.User,
	path: '/user',
};

const DASHBOARD = {
	component: views.Dashboard,
	path: '/',
};

const NOTFOUND = {
	component: views.NotFound,
	path: '*'
}

export default [USER, DASHBOARD, NOTFOUND];