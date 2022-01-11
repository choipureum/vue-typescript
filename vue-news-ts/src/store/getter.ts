import { RootState } from './state';

export const getters = {
	//getters는 다른 작업이 필요할때 computed와 같은
	fetchNews(state: RootState) {
		return state.news;
	},
};

export type Getters = typeof getters;
