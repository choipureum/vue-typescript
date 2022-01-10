import { ActionContext } from 'vuex';
import {
	fetchNewsList,
	fetchAskList,
	fetchJobsList,
	fetchUserInfo,
	fetchItemInfo,
	fetchList,
	NewsItem,
} from '../api/index';
import { Mutations, MutationTypes } from './mutations';
import { RootState } from './state';

enum ActionTypes {
	FETCH_NEWS = 'FETCH_NEWS',
}

type MyActionContext = {
	commit<K extends keyof Mutations>(
		key: K,
		payload: Parameters<Mutations[K]>[1],
	): ReturnType<Mutations[K]>;
} & Omit<ActionContext<RootState, RootState>, 'commit'>;

const actions = {
	async [ActionTypes.FETCH_NEWS](
		context: MyActionContext,
		payload?: NewsItem[],
	) {
		const { data } = await fetchNewsList();
		context.commit(MutationTypes.SET_NEWS, data);
		return data;
	},
};

type Actions = typeof actions;
export { ActionTypes, actions, Actions };

/*
export default {
	FETCH_NEWS(context) {
		fetchNewsList()
			.then(response => {
				//state에 담기위해선 mutation을 이용해야만 함
				context.commit('SET_NEWS', response.data);
				return response; //반환가능
			})
			.catch(error => {
				console.log(error);
			});
	},
	//ES6 Destructuring(구조 분해 문법) 적용 context.commit = {commit} (https://joshua1988.github.io/es6-online-book/destructuring.html)
	// import  {} from ~ 에서도 사용하는 부분임
	FETCH_ASK({ commit }) {
		return fetchAskList()
			.then(({ data }) => {
				commit('SET_ASKS', data);
			})
			.catch(error => {
				console.log(error);
			});
	},
	FETCH_JOBS(context) {
		return fetchJobsList()
			.then(response => {
				context.commit('SET_JOBS', response.data);
				return response;
			})
			.catch(error => {
				console.log(error);
			});
	},
	FETCH_USER({ commit }, name) {
		return fetchUserInfo(name)
			.then(({ data }) => {
				commit('SET_USER', data);
			})
			.catch(error => {
				console.log(error);
			});
	},
	FETCH_ITEM({ commit }, itemid) {
		return fetchItemInfo(itemid)
			.then(response => {
				commit('SET_ITEM', response.data);
				return response;
			})
			.catch(error => {
				console.log(error);
			});
	},
	//
	async FETCH_LIST(context, pageName) {
		const response = await fetchList(pageName);
		context.commit('SET_LIST', response.data);
		return response;
	},
	// promise 변경 // 정규 패턴
	async FETCH_ASYNC(context) {
		const response = await fetchNewsList();
		context.commit('SET_NEWS', response.data);
		return response; //반환해줘야 이후 .then().catch() 처리가 가능
	},
};
*/
