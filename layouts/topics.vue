<template>
  <div>
    <nav-bar />
    <div class="l-body--2column">
      <aside class="l-body__aside">
        <cat-bar />
        <shop-list />
      </aside>
      <main class="l-body__main">
        <page-title :title="pageTitle" />
        <nuxt />
      </main>
    </div>
  </div>
</template>

<script>
import PageTitle from '@/components/Atom/ContentTitle.vue';
import NavBar from '@/components/Organisms/NavBar.vue';
import CatBar from '@/components/Organisms/CatBar.vue';
import ShopList from '@/components/Organisms/ShopList.vue';

export default {
  components: {
    NavBar,
    CatBar,
    ShopList,
    PageTitle,
  },
  computed: {
    pageTitle() {
      return this.$store.state.pageTitle;
    }
  },
  // computed: {
  //   pageTitle() {
  //     return this.$route.meta.title || 'デフォルトタイトル';
  //   }
  // }
}
</script>


<style lang="scss" scoped>
.l-body {

  &__aside {
    grid-area: nav;
  }

  &__main {
    grid-area: main;
  }

  &--2column {
    display: grid;
    grid-template-areas: 
      'main nav'
    ;
    grid-template-columns: 1fr 240px;
    gap: 32px;
    padding: 32px 24px;
  }
}
</style>