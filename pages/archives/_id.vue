<template>
  <div>
    <h2>{{ post.title.rendered }}</h2>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-html="post.content.rendered"></div>
    <nuxt-link to="/">トップページへ</nuxt-link>
  </div>
</template>

<script>
	export default {
    async asyncData(context) {
      const post = await context.$axios.$get(`https://blog.cony-design.com/wp-json/wp/v2/posts/${context.params.id}`)
      return { post }
    }
	};
</script>
