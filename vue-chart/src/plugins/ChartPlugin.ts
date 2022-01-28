import Chart from 'chart.js';
import { VueConstructor } from 'vue/types/umd';
/**
 * 외부 라이브러리를 다운로드 모듈화 할때는 지원되는 type도 함께 받는것이 좋다.
 * 없을 경우 직접 만들어야함
 */

export default {
	install(Vue: VueConstructor) {
		Vue.prototype.$_Chart = Chart;
	},
};
