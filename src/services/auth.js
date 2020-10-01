import jwt from 'jsonwebtoken';
import api from './api';

export const TOKEN_KEY = '@myapp-Token';

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getUser = () => localStorage.getItem(TOKEN_KEY);

export const login = async user => {
	localStorage.setItem(TOKEN_KEY, JSON.stringify(user));
}

export const logout = () => {
	localStorage.removeItem(TOKEN_KEY);
}

export const isExpired = () => {
	const user = JSON.parse(getUser());

	const token = user.token;
	const decodedToken = jwt.decode(token, { complete: true }).payload;
	const dateNow = new Date();
	const isExpired =  decodedToken.exp < (dateNow.getTime() / 1000) ? true : false;

	return isExpired;
}

export const renovateToken = async () => {
	const user = JSON.parse(getUser());
	const refreshToken = user.refreshToken; 
	try {
		const sessions = await api.post('/sessions/refreshToken', { refreshToken });
		login({ 
			token: sessions.data.token, 
			refreshToken: sessions.data.refreshToken, 
			username: user.username, 
			permission: user.permission 
		});
		return true;
	} catch(error) {
		console.error(error)
	}
}