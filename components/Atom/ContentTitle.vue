<template>
  <div>
    <h2 class="content_ttl">{{ title }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style lang="scss" scoped>
  .content_ttl {
    font-size: 2rem;
    margin-bottom: 24px;
  }
</style>
