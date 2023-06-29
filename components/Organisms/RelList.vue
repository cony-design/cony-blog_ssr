<template>
  <div>
    <ul class="rel">
      <li class="rel__article" v-for="post in posts" :key="post.id">
        <NuxtLink :to="'/archives/' + post.id + '/'">
          <p class="rel__article__date"> {{ post.date }}</p>
          <h2 class="rel__article__ttl">{{ post.title.rendered }}</h2>
          <p class="rel__article__desc">{{ post.excerpt.rendered }}</p>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: []
    }
  },
  props: {
    parentData: Object
  },
  async fetch() {
    const posts = await this.$axios.$get(`https://blog.cony-design.com/wp-json/wp/v2/posts?_embed&categories=${this.parentData}`)
    this.posts = posts
  }
}
</script>

<style lang="scss" scoped>
.rel {
  list-style-type: none;
  padding: 32px 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

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