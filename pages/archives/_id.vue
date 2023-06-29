<template>
  <div>
    <div class="article">
      <h2 class="article__ttl">{{ post.title.rendered }}</h2>
      <div class="article__body" v-html="post.content.rendered"></div>

      <NuxtLink :to="'/'"  class="button">トップページへ</NuxtLink>

      <rel-list :parentData="post.categories" />
    </div>
  </div>
</template>

<script>
import RelList from '@/components/Organisms/RelList.vue';

	export default {
    layout: "original",
    components: {
      RelList,
    },
    async asyncData(context) {
      const post = await context.$axios.$get(`https://blog.cony-design.com/wp-json/wp/v2/posts/${context.params.id}`)
      return { post }
    }
	};
</script>


<style lang="scss" scoped>
.article {
  max-width: 848px;
  padding-block-start: 100px;
  padding-inline: 24px;
  margin-inline: auto;

  &__ttl {
    font-size: 2em;
    padding-bottom: 60px;
  }

  &__body {
    padding-bottom: 60px;
  }

  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--gray-50);
    padding: 12px;
    margin: 0;
    border-radius: 4px;
    text-align: center;
    text-decoration: none;
  }
}
</style>