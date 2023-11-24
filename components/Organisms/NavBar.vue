<template>
  <div class="navBar">
    <h1 class="navLogo">
      <nuxt-link to="/"><logo /></nuxt-link>
    </h1>
    <nav class="navMenu">
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/shops">Shops</nuxt-link>
      <nuxt-link to="/contact">Contact</nuxt-link>
    </nav>
    <SearchBar class="searchBar"></SearchBar>
  </div>
</template>

<script>
import Logo from '@/components/Atom/Logo.vue';
import SearchBar from '~/components/SearchBar.vue';

export default {
  components: {
    Logo,
    SearchBar,
  }
}
</script>

<style lang="scss" scoped>
  .navBar {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  
  .navLogo {
    flex-shrink: 0;

    a {
      text-decoration: none;
    }
  }

  .navMenu {
    display: flex;
    justify-content: flex-end;
    flex-shrink: 0;

    > * {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-inline: 1rem;
      text-decoration: none;
    }
  }
  .searchBar {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-grow: 1;
    gap: 4px;

    > * {
      height: 32px;
    }
  }
</style>