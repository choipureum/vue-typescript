import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';

import { mutations } from './mutations';
import { actions } from './actions';
import { RootState, state } from './state';

Vue.use(Vuex);

export const store: StoreOptions<RootState> = {
	state: state,
	mutations: mutations,
	actions: actions,
};

export default new Vuex.Store(store);

/*
export const store = new Vuex.Store({
	state: {
		news: [],
		ask: [],
		jobs: [],
		user: {},
		item: {},
		list: [],
	},
	getters: {
		fetchAsk(state) {
			return state.ask;
		},
		fetchNews(state) {
			return state.news;
		},
		fetchJobs(state) {
			return state.jobs;
		},
		fetchUser(state) {
			return state.user;
		},
		fetchItem(state) {
			return state.item;
		},
	},
	mutations,
	actions,
});
*/
