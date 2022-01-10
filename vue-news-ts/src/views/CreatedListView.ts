import ListView from './ListView.vue';
import bus from '../utils/bus';
import { CreateElement } from 'vue';

//HOC(하이오더 컴포넌트)
export default function createListView(name: string) {
	return {
		name,
		mounted() {
			bus.$emit('off:progress');
		},
		render(h: CreateElement) {
			return h(ListView);
		},
	};
}
