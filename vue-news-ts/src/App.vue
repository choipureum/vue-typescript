<template>
	<div id="app">
		<!--<ToolBar></ToolBar>-->
		<!--파스칼케이스를 구분해서 케밥으로 변경해줌-->
		<tool-bar></tool-bar>
		<!-- url이 만약 news 라면-->
		<!--<NewsView></NewsView>-->
		<transition name="page">
			<router-view></router-view>
		</transition>
		<spinner :loading="loadingStatus"></spinner>
	</div>
</template>
<script lang="ts">
import Vue from 'vue';
import ToolBar from './components/ToolBar.vue';
import Spinner from './components/Spinner.vue';
import bus from '@/utils/bus';
import { MutationTypes } from './store/mutations';

export default Vue.extend({
	components: {
		ToolBar,
		Spinner,
	},
	data() {
		return {
			loadingStatus: false,
		};
	},
	methods: {
		onProgress() {
			this.loadingStatus = true;
		},
		offProgress() {
			this.loadingStatus = false;
		},
	},
	created() {
		this.$store.commit(MutationTypes.SET_NEWS);
		console.log(process.env.VUE_APP_TITLE);
		bus.$on('on:progress', this.onProgress);
		bus.$on('off:progress', this.offProgress);
	},
	beforeDestroy() {
		bus.$off('start:spinner', this.onProgress);
		bus.$off('end:spinner', this.offProgress);
	},
});
</script>
<style>
body {
	padding: 0;
	margin: 0;
}
a {
	color: #34495e;
	text-decoration: none; /* anchor 태그 밑줄 사라짐 */
}
a:hover {
	color: #42b883;
	text-decoration: underline;
}
a.router-link-exact-active.router-link-active {
	text-decoration: underline;
}
/* Router Transition */
.page-enter-active,
.page-leave-active {
	transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
	opacity: 0;
}
</style>
