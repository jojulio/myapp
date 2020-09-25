export const TOKEN_KEY = '@myapp-Token';

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const login = token => {
	localStorage.setItem(TOKEN_KEY, token);
}

export const logout = () => {
	// TODO: redirect do '/login' after to remove item from storage
	localStorage.removeItem(TOKEN_KEY);
}