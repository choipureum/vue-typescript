import axios, { AxiosInstance, AxiosPromise } from 'axios';

const APP_BASE_URL = 'https://api.hnpwa.com/v0/';
const options = {};

function create(url: string, options = {}): AxiosInstance {
	const instance = axios.create(Object.assign({ baseURL: url }, options));
	return instance;
}

function createWithAuth(url: string, options = {}): AxiosInstance {
	const instance = axios.create(Object.assign({ baseURL: url }, options));
	setRequestOptions(instance);
	setResponseOptions(instance);
	return instance;
}

const news = create(`${APP_BASE_URL}news/`);
const user = createWithAuth(`${APP_BASE_URL}user/`, options);

export { news, user };
