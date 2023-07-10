<template>
  <div>
    <div>
      <form v-on:submit.prevent="submit">
        <!-- お問い合わせ確認画面のコンテンツ -->
        <h2>お問い合わせを承りました</h2>
        <p>入力されたメールアドレスに返信をしましたので、ご確認ください。</p>
        <NuxtLink to="/">トップへ戻る</NuxtLink>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  created() {

  },
  methods: {
    submit() {
    }
  }
}
</script>
