import views from '../../../components/Views';

const USER = {
	component: views.User,
	path: '/user',
};

const DASHBOARD = {
	component: views.Dashboard,
	path: '/',
};

export default [USER, DASHBOARD]