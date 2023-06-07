import axios from 'axios';

import { getToken } from './token';

export const api = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
});

export const uspacyApi = axios.create();
uspacyApi.interceptors.request.use(async (config) => {
	const token = await getToken();
	if (token) {
		config.headers['Authorization'] = `Bearer ${token}`;
	}
	return config;
});
