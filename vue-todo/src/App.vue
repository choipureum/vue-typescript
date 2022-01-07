<template>
	<div>
		<header></header>
		<main>
			<TodoInput
				:item="todoText"
				@input="updateTodoText"
				@add="addTodoItem"
			></TodoInput>
			<div>
				<ul>
					<TodoListItem
						v-for="(todoItem, index) in todoItems"
						:todoItem="todoItem"
						:index="index"
						:key="index"
						@toggle="toggleTodoItemComplete"
						@delete="removeTodoItem"
					></TodoListItem>
				</ul>
			</div>
		</main>
	</div>
</template>

<script lang="ts">
//vue - vue js 기반
//ts - ts 기반
import Vue from 'vue';
import TodoInput from './components/TodoInput.vue';
import TodoListItem from './components/TodoListItem.vue';

const STORAGE_KEY = 'vue-todo-ts-v1';
const storage = {
	save(todoItems: Todo[]) {
		const parsedTodoItems = JSON.stringify(todoItems);
		localStorage.setItem(STORAGE_KEY, parsedTodoItems);
	},
	fetch(): Todo[] {
		const todoItems = localStorage.getItem(STORAGE_KEY) || '[]';
		const result: Todo[] = JSON.parse(todoItems);
		return result;
	},
};

export interface Todo {
	title: string;
	done: boolean;
}

export default Vue.extend({
	components: { TodoInput, TodoListItem },
	data() {
		return {
			todoText: '' as string,
			todoItems: [] as Todo[],
		};
	},
	methods: {
		updateTodoText(value: string) {
			this.todoText = value;
		},
		addTodoItem() {
			const todo: Todo = {
				title: this.todoText,
				done: false,
			};
			this.todoItems.push(todo);
			storage.save(this.todoItems);
			this.initTodoText();
		},
		initTodoText() {
			this.todoText = '';
		},
		fetchTodoItems() {
			this.todoItems = storage.fetch().sort((a: Todo, b: Todo) => {
				if (a.title < b.title) return -1;
				if (a.title > b.title) return 1;
				return 0;
			});
		},
		removeTodoItem(index: number) {
			this.todoItems.splice(index, 1);
			storage.save(this.todoItems);
		},
		toggleTodoItemComplete(todoItem: Todo, index: number) {
			this.todoItems.splice(index, 1, {
				...todoItem,
				//title: todoItem.title,
				done: !todoItem.done,
			});
		},
	},
	created() {
		this.fetchTodoItems();
	},
});
</script>

<style scoped></style>
