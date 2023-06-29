<template>
  <div>
    <nav-bar />
    <div class="l-body--2column">
      <aside class="l-body__aside">
        <cat-bar />
      </aside>
      <main class="l-body__main">
        <nuxt />
      </main>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/Organisms/NavBar.vue';
import CatBar from '@/components/Organisms/CatBar.vue';

export default {
  components: {
    NavBar,
    CatBar,
  },
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