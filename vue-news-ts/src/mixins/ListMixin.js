import bus from '../utils/bus.ts';
//mixin
export default {
	// 재사용할 컴포넌트 옵션 & 로직
	created() {
		bus.$emit('start:spinner');
		this.$store
			.dispatch('FETCH_LIST', this.$route.name)
			.then(() => {
				console.log('5 fetched');
				bus.$emit('end:spinner');
			})
			.catch(error => {
				console.log(error);
			});
	},
};
