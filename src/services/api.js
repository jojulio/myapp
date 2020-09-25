import axios from 'axios';
import { getUser } from './auth';

const api = axios.create({
	baseURL: 'http://127.0.0.1:3002'
});

api.interceptors.request.use(async config => {
	const user = getUser();
	if (user) {
		const userParsed = JSON.parse(user);
		const token = userParsed.token;
		config.headers.Authorization = `Bearer ${token}`; 
	}

	return config;
});

export default api;