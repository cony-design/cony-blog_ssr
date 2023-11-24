<template>
  <div>
    <div>
      <form v-on:submit.prevent="submit">
        <!-- お問い合わせ確認画面のコンテンツ -->
        <h2>お問い合わせ内容をご確認ください</h2>
        <!-- 確認画面にお問い合わせ内容を表示するコードを追加 -->
        <label>名前</label>
        <p>{{contact.name}}</p>
        <label>メールアドレス</label>
        <p>{{contact.email}}</p>
        <label>Subject</label>
        <p>{{contact.subject}}</p>
        <label>お問い合わせ内容</label>
        <p>{{contact.msg}}</p>
        <button type="submit">送信</button>
        <NuxtLink to="/contact/">修正</NuxtLink>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  layout: "topics",
  data() {
    return {
      contact: {
        name: '',
        email: '',
        subject: '',
        msg: '',
      }
    }
  },
  created() {
    const getContactData = this.$store.getters['contact/getContact'];
    this.contact.name = getContactData.name;
    this.contact.email = getContactData.email;
    this.contact.subject = getContactData.subject;
    this.contact.msg = getContactData.msg;
  },
  methods: {
    async submit() {
      console.log(this.contact);

      // お問い合わせフォームを送信する処理

      const formData = new FormData()
      formData.append('your-name', this.contact.name) // フォームのフィールド名に合わせて変更
      formData.append('your-email', this.contact.email) // フォームのフィールド名に合わせて変更
      formData.append('your-subject', this.contact.subject) // フォームのフィールド名に合わせて変更
      formData.append('your-message', this.contact.msg) // フォームのフィールド名に合わせて変更

      try {
        const response = await this.$axios.post('https://blog.cony-design.com/wp-json/contact-form-7/v1/contact-forms/51/feedback', formData)
        this.submitted = true;
        console.log(response.data)
        // フォームの送信が成功した場合の処理

        // 送信後、storeに保存していたデータを破棄
        this.$store.dispatch('contact/removeAction');

        // 確認画面に遷移
        this.$router.push('/contact/complete/');

      } catch (error) {
        console.log("失敗したよ");
        console.error(error);
        // フォームの送信が失敗した場合の処理
      }
    }
  }
}
</script>
