<template>
  <div class="catBar">
    <nav class="catMenu">
      <div class="topics__article" v-for="category in categories" :key="category.id">
        <NuxtLink :to="'/category/' + category.id + '/'">
          {{ category.name }}
        </NuxtLink>
      </div>
      
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: []
    }
  },
  async fetch() {
    const categories = await this.$axios.$get(`https://blog.cony-design.com/wp-json/wp/v2/categories`)
    this.categories = categories
  }
}
</script>

<style lang="scss" scoped>
  .catBar {
    width: 100%;
  }

  .catMenu {
    // display: flex;
    // justify-content: flex-end;
    // flex-grow: 1;
    // gap: 1rem;
    // padding-inline-end: 1rem;
    border-top: 2px solid var(--gray-25);

    > * {
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid var(--gray-90);
    }

    a {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      height: 4rem;
      line-height: 4rem;
      padding-inline: 1rem;
      text-decoration: none;
      color: var(--gray-25);
      border-radius: 4px;
      transition: .5s ease-out;

      &:hover {
        background-color: var(--gray-95);
      }
    }
  }
</style>