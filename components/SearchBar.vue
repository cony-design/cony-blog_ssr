<template>
  <div>
    <div class="search__form">
      <input type="text" v-model="searchQuery">
      <nuxt-link class="submit" :to="{ name: 'search-result', query: { q: searchQuery } }">検索</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: ''
    };
  },
  watch: {
    '$route'(to, from) {
      if (to.name !== 'search-result') { // 検索結果ページ以外に遷移した場合
        this.searchQuery = ''; // 検索フォームを空にする
      }
    }
  },
  created() {
    if (this.$route.query.q) {
      this.searchQuery = this.$route.query.q;
    }
  }
}
</script>

<style>
.search__form {
  display: flex;
  padding: 8px;
  gap: 8px;
  font-size: 16px;
}

input[type="text"] {
  border: 1px solid gainsboro;
  padding: 4px 6px;
  outline: none;
}

.submit {
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  padding-inline: 12px;
  border: 1px solid gainsboro;
  background-color: aliceblue;
  border-radius: 4px;
  text-decoration: none;
}
</style>
