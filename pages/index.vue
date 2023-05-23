<template>
	<div>
    <ul>
      <li v-for="post in posts" :key="post.id">
        日付: {{ post.date }}<br>
        <NuxtLink :to="'/archives/'+post.id+'/'">title: {{ post.title.rendered }}</NuxtLink>
        {{ post.excerpt.rendered }}<br>
      </li>
    </ul>
	</div>
</template>

<script>
	export default {
    async asyncData({$axios}) {
      const posts = await $axios.$get('https://blog.cony-design.com/wp-json/wp/v2/posts')
      return { posts }
    }
	};
</script>
