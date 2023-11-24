<template>
  <div>
    <ul class="topics">
      <li class="topics__article" v-for="post in posts" :key="post.id">
        <NuxtLink :to="'/archives/' + post.id + '/'">
          <p class="topics__article__date"> {{ post.date }}</p>
          <h2 class="topics__article__ttl">{{ post.title.rendered }}</h2>
          <div class="topics__article__desc" v-html="post.excerpt.rendered"></div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  layout: "topics",
  head() {
    return {
      title: 'HOME',
      meta: [
        { hid: 'description', name: 'description', content: 'ページの説明' }
      ]
    };
  },
  mounted() {
    this.$store.commit('setPageTitle', 'HOME');
  },
  async asyncData({ $axios }) {
    const posts = await $axios.$get('https://blog.cony-design.com/wp-json/wp/v2/posts')
    return { posts }
  }
};
</script>

<style lang="scss" scoped>
.topics {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  @include pc {
    grid-template-columns: 1fr 1fr 1fr;
  }

  &__article {
    display: flex;
    align-items: stretch;

    > * {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      width: 100%;
      border: 1px solid var(--gray-95);
      border-radius: 20px;
      padding: 28px;
      background-color: var(--white);
      text-decoration: none;
    }

    &__date {
      font-size: .5rem;
      padding-bottom: 8px;
      color: var(--gray-50);
    }

    &__ttl {
      font-size: 1.125rem;
      padding-bottom: 8px;
      color: var(--gray-25);
    }

    &__desc {
      font-size: .75rem;
      color: var(--gray-50);
    }
  }
}
</style>