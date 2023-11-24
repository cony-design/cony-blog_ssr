<template>
  <div>
    <div v-if="results.length">
      <div v-for="post in results" :key="post.id">
        <h3>{{ post.title.rendered }}</h3>
        <div v-html="post.excerpt.rendered"></div>
      </div>
    </div>
    <div v-else>
      検索結果が見つかりません。
    </div>
  </div>
</template>

<script>
export default {
  props: {
    results: Array
  }
}
</script>
