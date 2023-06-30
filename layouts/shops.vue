<template>
  <div>
    <nav-bar />
    <div class="l-body">
      <main class="l-body__main">
        <nuxt />
      </main>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/Organisms/NavBar.vue';
import CatBar from '@/components/Organisms/CatBar.vue';
import ShopList from '@/components/Organisms/ShopList.vue';

export default {
  components: {
    NavBar,
    CatBar,
    ShopList,
  },
}
</script>


<style lang="scss" scoped>
.l-body {
  padding: 32px 24px;

  &__aside {
    grid-area: nav;
  }

  &__main {
    grid-area: main;
  }
}
</style>