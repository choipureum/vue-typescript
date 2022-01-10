import { NewsItem } from '@/api';

export const state = {
	news: [] as NewsItem[],
	ask: [],
	jobs: [],
	user: {},
	item: {},
	list: [],
};

//state 타입추론하기
export type RootState = typeof state;
