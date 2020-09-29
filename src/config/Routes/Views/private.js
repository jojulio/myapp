import React from 'react';
import views from '../../../components/Views';
import { FaHome, FaUsers } from 'react-icons/fa';

const USER = {
	component: views.User,
	path: '/user',
	roles: ['admin'], 
	name: 'Usuários',
	id: 'user',
	icon : <FaUsers />,
	order: 2
};

const SHOWUSER = {
	component: views.ShowUser,
	path: '/user/:id',
	roles: ['admin'],
};

const ADDUSER = {
	component: views.AddUser,
	path: '/user/add',
	roles: ['admin'],
};

const DASHBOARD = {
	component: views.Dashboard,
	path: '/',
	name: 'Dashboard',
	id: 'dashboard',
	icon: <FaHome />,
	order: 1,
	roles: ['admin', 'programmer'],
};

const NOTFOUND = {
	component: views.NotFound,
	path: '*',
}

export const menu = [USER, DASHBOARD];
export default [USER, ADDUSER, SHOWUSER, DASHBOARD, NOTFOUND];