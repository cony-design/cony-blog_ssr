<template>
  <div>
    <ul class="shop">
      <li class="shop__article" v-for="post in posts" :key="post.id">
        <NuxtLink :to="'/shops/' + post.id + '/'">
          <h2 class="shop__article__ttl">{{ post.title.rendered }}</h2>
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
    parentData: Array
  },
  async fetch() {
    const posts = await this.$axios.$get(`https://blog.cony-design.com/wp-json/wp/v2/shops`)
    this.posts = posts
  }
}
</script>

<style lang="scss" scoped>
.shop {
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
      font-size: 1rem;
      color: var(--gray-25);
    }
  }
}
</style>