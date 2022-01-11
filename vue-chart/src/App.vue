<template>
	<div>
		<canvas id="myChart"></canvas>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	mounted() {
		const canvasElement = document.getElementById(
			'myChart',
		) as HTMLCanvasElement;
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
