<template>
	<div>
		<canvas id="myChart" ref="myChart"></canvas>
	</div>
</template>

<script lang="ts">
import Vue, { VueConstructor } from 'vue';
import { MyVueRefs } from './types/index';
// vue ref 추론 1번
export default //Vue as VueConstructor<Vue & { $refs: { myChart: HTMLCanvasElement } }>
(Vue as MyVueRefs<{ myChart: HTMLCanvasElement }>).extend({
	mounted() {
		// 일반적인 돔  접근 지양 => ref 지향
		// const canvasElement = document.getElementById(
		// 	'myChart',
		// ) as HTMLCanvasElement;
		const canvasElement = this.$refs.myChart;

		const ctx = canvasElement.getContext('2d');
		if (!ctx) return;
		const labels = ['January', 'February', 'March', 'April', 'May', 'June'];

		const data = {
			labels: labels,
			datasets: [
				{
					label: 'My First dataset',
					backgroundColor: 'rgb(255, 99, 132)',
					borderColor: 'rgb(255, 99, 132)',
					data: [0, 10, 5, 2, 20, 30, 45],
				},
			],
		};
		const config = {
			type: 'line',
			data: data,
			options: {},
		};

		const myChart = new this.$_Chart(ctx, config);
	},
});
</script>

<style scoped></style>
