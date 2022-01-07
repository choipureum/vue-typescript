<template>
	<div>
		<label for="todo-input">TODO : </label>
		<input type="text" id="todo-input" :value="item" @input="handleInput" />
		<button @click="addTodo">Add💕</button>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	props: {
		item: {
			//validation 처리
			type: String,
			required: true,
		},
	},
	methods: {
		handleInput(event: InputEvent) {
			const eventTarget = event.target as HTMLInputElement;
			this.$emit('input', eventTarget.value);
		},
		addTodo() {
			this.$emit('add');
		},
	},
});
</script>

<style scoped></style>
