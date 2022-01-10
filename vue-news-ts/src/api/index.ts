import axios, { AxiosPromise } from 'axios';
import { handlerException } from '../utils/handler';

//여기서 보통 try catch 적용
// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
	baseUrl: 'https://api.hnpwa.com/v0/',
};

export interface NewsItem {
	comments_count: number;
	domain: string;
	id: number;
	points: number;
	time: number;
	time_ago: string;
	titile: string;
	type: string;
	url: string;
	user: string;
}

// 2. API 함수들을 정리
function fetchNewsList(): AxiosPromise<NewsItem[]> {
	//return axios.get(config.baseUrl+'news/1.json');
	//axios 객체는 기본적으로 promise로 반환해줌
	return axios.get(`${config.baseUrl}news/1.json`); //ES6 템플릿 string
}

function fetchJobsList() {
	return axios.get(`${config.baseUrl}jobs/1.json`);
}

function fetchAskList() {
	return axios.get(`${config.baseUrl}ask/1.json`);
}

function fetchUserInfo(username: any) {
	return axios.get(`${config.baseUrl}user/${username}.json`);
}

function fetchItemInfo(itemid: any) {
	return axios.get(`${config.baseUrl}item/${itemid}.json`);
}

//통일된 api함수
function fetchList(pageName: string): AxiosPromise<NewsItem[]> {
	return axios.get(`${config.baseUrl}${pageName}/1.json`);
}

export {
	fetchNewsList,
	fetchJobsList,
	fetchAskList,
	fetchUserInfo,
	fetchItemInfo,
	fetchList,
};
