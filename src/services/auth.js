export const TOKEN_KEY = '@myapp-Token';

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getUser = () => localStorage.getItem(TOKEN_KEY);

export const login = user => {
	localStorage.setItem(TOKEN_KEY, JSON.stringify(user));
}

export const logout = () => {
	localStorage.removeItem(TOKEN_KEY);
}