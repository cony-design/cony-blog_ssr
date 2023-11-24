<template>
  <div>
    <div>
      <form v-on:submit.prevent="submit">
        <h2>お問い合わせを承りました</h2>
        <p>入力されたメールアドレスに返信をしましたので、ご確認ください。</p>
        <NuxtLink to="/" class="button">トップへ戻る</NuxtLink>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  layout: "topics",
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
