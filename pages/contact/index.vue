<template>
  <div>
    <h2>お問い合わせフォーム</h2>
    <form v-on:submit.prevent="submit">
      <div>
        <p><label>名前</label></p>
        <input v-model="contact.name" name="name" type="text" placeholder="名前" />
      </div>
      <div>
        <p><label>メールアドレス</label></p>
        <input v-model="contact.email" name="email" type="email" placeholder="メールアドレス">
      </div>
      <div>
        <p><label>Subject</label></p>
        <input v-model="contact.subject" name="subject" type="text" placeholder="Subject">
      </div>
      <div>
        <p><label>お問い合わせ内容</label></p>
        <textarea v-model="contact.msg" name="msg" cols="30" rows="10"></textarea>
      </div>
      <button type="submit">確認画面へ</button>
    </form>
  </div>
</template>

<script>
export default {
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

      // storeに保存
      this.$store.dispatch(`contact/addAction`, this.contact);

      // 確認画面に遷移
      this.$router.push('/contact/Confirmation/');

      // 入力内容のバリデーションを行う必要がある場合は、ここでバリデーションを実装する

      // バリデーションが成功したら、確認画面へ遷移する
      // await this.$nextTick();
      // this.$router.push({
      //   name: 'confirmation',
      //   params: {
      //     name: this.name,
      //     email: this.email,
      //     subject: this.subject,
      //     msg: this.msg
      //   }
      // });
    },
    // async submitForm() {
    //   // お問い合わせフォームを送信する処理
    //   // Contact Form 7のREST APIを使用するか、フォームを直接POSTするか、適切な方法でフォームの送信を行う
    //   const formData = new FormData()
    //   formData.append('your-name', this.$route.params.name) // フォームのフィールド名に合わせて変更
    //   formData.append('your-email', this.$route.params.email) // フォームのフィールド名に合わせて変更
    //   formData.append('your-subject', this.$route.params.subject) // フォームのフィールド名に合わせて変更
    //   formData.append('your-message', this.$route.params.msg) // フォームのフィールド名に合わせて変更

    //   try {
    //     const response = await this.$axios.post('https://blog.cony-design.com/wp-json/contact-form-7/v1/contact-forms/51/feedback', formData)
    //     console.log("成功したよ");
    //     this.submitted = true;
    //     console.log(response.data)
    //     // フォームの送信が成功した場合の処理
    //   } catch (error) {
    //     console.log("失敗したよ");
    //     console.error(error)
    //     // フォームの送信が失敗した場合の処理
    //   }
    // }
  }
}
</script>
