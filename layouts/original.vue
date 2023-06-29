<template>
  <div>
    <nav-bar />
    <nuxt />
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


