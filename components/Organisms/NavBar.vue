<template>
  <div class="navBar">
    <h1 class="navLogo">
      <nuxt-link to="/"><logo /></nuxt-link>
    </h1>
    <nav class="navMenu">
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/archives">Archives</nuxt-link>
    </nav>
  </div>
</template>

<script>
import Logo from '@/components/Atom/Logo.vue';

export default {
  components: {
    Logo,
  },
}
</script>

<style lang="scss" scoped>
  .navBar {
    display: flex;
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
    flex-grow: 1;

    > * {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-inline: 1rem;
      text-decoration: none;
    }
  }
</style>