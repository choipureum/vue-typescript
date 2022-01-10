import bus from '../utils/bus.ts';

export default {
	mounted() {
		bus.$emit('end:spinner');
	},
};
