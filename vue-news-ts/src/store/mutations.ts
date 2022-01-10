import { NewsItem } from '@/api';
import { RootState } from './state';

export enum MutationTypes {
	SET_TOKEN = 'SET_TOKEN',
	SET_NEWS = 'SET_NEWS',
}

export const mutations = {
	[MutationTypes.SET_NEWS](state: RootState, news: NewsItem[]) {
		state.news = news;
	},
};

export type Mutations = typeof mutations;

/*
export default {
	SET_NEWS(state, news) {
		state.news = news;
	},
	SET_ASKS(state, ask) {
		state.ask = ask;
	},
	SET_JOBS(state, jobs) {
		state.jobs = jobs;
	},
	SET_USER(state, user) {
		state.user = user;
	},
	SET_ITEM(state, item) {
		state.item = item;
	},
	SET_LIST(state, list) {
		state.list = list;
	},
};
*/
