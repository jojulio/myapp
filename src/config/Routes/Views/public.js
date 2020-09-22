import views from '../../../components/Views';
import { logout } from '../../../services/auth';

const LOGIN = {
	component: views.Login,
	path: '/login',
	private: true
};

const LOGOUT = {
	component: logout,
	path: '/logout'
}

export default [LOGIN, LOGOUT];