<template>
	<div>
		<ul class="contents-list">
			<li v-for="item in listItems" v-bind:key="item.id" class="post">
				<!-- 포인트 영역 -->
				<div class="points">
					{{ item.points || 0 }}
					<!-- 앞에 값이 존재하지 않으면 뒤에 0을 넣어줌) -->
				</div>
				<!-- 기타정보 영역 -->
				<div>
					<!-- 타이틀 영역 -->
					<p class="contents-title">
						<!--tempalte로도 작업할 수 있다.-->
						<template v-if="item.domain">
							<!--item.domain이 불린이 아니더라도 값이 존재한다면 -->
							<a :href="item.url">
								{{ item.title }}
							</a>
						</template>
						<template v-else>
							<router-link :to="`item/${item.id}`">
								{{ item.title }}
							</router-link>
						</template>
					</p>
					<small class="link-text">
						{{ item.time_ago }} by
						<router-link
							v-if="item.user"
							:to="`/user/${item.user}`"
							class="link-text"
							>{{ item.user }}</router-link
						>
						<a v-else :href="item.url">
							{{ item.domain }}
						</a>
					</small>
				</div>
			</li>
		</ul>
	</div>
</template>
<script lang="ts">
import { NewsItem } from '@/api';
import Vue, { PropType } from 'vue';

export default Vue.extend({
	props: {
		items: {
			type: Array as PropType<NewsItem[]>,
			required: true,
		},
	},
	methods: {
		timeAgo(news: NewsItem): string {
			return news.time_ago.concat(', 2021');
		},
	},
	computed: {
		listItems(): any {
			return this.$store.state.list;
		},
	},
});
</script>
<style scoped>
.contents-list {
	margin: 0;
	padding: 0;
}
.post {
	list-style: none;
	display: flex;
	align-items: center;
	border-bottom: 1px solid #eee;
}
.points {
	width: 80px;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: center; /* 수직에서 중앙정렬 */
	color: #42b883;
}
.contents-title {
	margin: 0;
}
.link-text {
	color: gray;
}
</style>
