import { CommitOptions, DispatchOptions, Store } from 'vuex';
import { Actions } from './actions';
import { Getters } from './getter';
import { Mutations } from './mutations';
import { RootState } from './state';

type MyMutations = {
	commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
		key: K,
		payload?: P,
		options?: CommitOptions,
	): ReturnType<Mutations[K]>;
};

type MyActions = {
	dispatch<K extends keyof Actions>(
		key: K,
		payload?: Parameters<Actions[K]>[1],
		options?: DispatchOptions,
	): ReturnType<Actions[K]>;
};

type MyGetters = {
	getters: {
		[K in keyof Getters]: ReturnType<Getters[K]>;
	};
};

//커스텀 뮤테이션 타입
export type MyStore = Omit<
	Store<RootState>,
	'commit' | 'dispatch' | 'getters'
> &
	MyMutations &
	MyActions &
	MyGetters;
// & 인터섹션
// Omit은 전체 컬럼에서 commit만 제외하고 나머지 객체를 가져온다

// node_modules - vuex - vue.d.ts 에서 2개를 변경해준다
//  명시적 추론을 위해서
