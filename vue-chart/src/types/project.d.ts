import Vue from 'vue';
import Chart from 'chart.js';

type ChartLib = typeof Chart;

declare module 'vue/types/vue' {
	interface Vue {
		$_Chart: ChartLib;
	}
}

/**
 * @types 라이브러리가 제공되지 않는 라이브러리의 경우
 */
declare module '라이브러리 이름';
