<template>
  <div>
    <h2>お問い合わせフォーム</h2>
    <form v-on:submit.prevent="submit">
      <ValidationObserver ref="obs" v-slot="ObserverProps">
        <div>
          <p>名前</p>
          <validation-provider v-slot="{ errors }" rules="required" name="名前" :validate-on="'blur'">
            <input v-model="contact.name" class="input" type="text" placeholder="名前" />
            <p v-show="errors.length" class="help is-danger">
              {{ errors[0] }}
            </p>
          </validation-provider>
        </div>
        <div>
          <p>メールアドレス</p>

          <validation-provider v-slot="{ errors }" rules="required|email" name="メールアドレス" :validate-on="'blur'" vid="email">
            <input v-model="contact.email" class="input" type="text" placeholder="メールアドレス" />
            <p v-show="errors.length" class="help is-danger">
              {{ errors[0] }}
            </p>
          </validation-provider>

          <ValidationProvider v-slot="{ errors }" rules="required|confirmed:email" name="メールアドレス(確認)" :validate-on="'blur'">
            <input v-model="contact.email_conf" type="text" placeholder="メールアドレス(確認)" >
            <p  v-show="contact.email_conf" class="help is-danger">
              {{ errors[0] }}
            </p>
          </ValidationProvider>

        </div>
        <div>
          <p>問い合わせ内容</p>
          <validation-provider v-slot="{ errors }" rules="required" name="問い合わせ内容" :skip-if-empty="false" :validate-on="'blur'">
            <select v-model="contact.subject" name="subject">
              <option value="">選択してください</option>
              <option value="店舗について" selected="selected">店舗について</option>
              <option value="サイトについて">サイトについて</option>
              <option value="商品について">商品について</option>
              <option value="その他お問い合せ">その他お問い合せ</option>
            </select>
            <!-- <input v-model="contact.subject" class="input" type="text" placeholder="Subject" /> -->
            <p v-show="errors.length" class="help is-danger">
              {{ errors[0] }}
            </p>
          </validation-provider>

        </div>
        <div>
          <p>本文</p>
          <validation-provider v-slot="{ errors }" rules="required" name="本文" :validate-on="'blur'">
            <textarea v-model="contact.msg" name="msg" cols="30" rows="10"></textarea>
            <p v-show="errors.length" class="help is-danger">
              {{ errors[0] }}
            </p>
          </validation-provider>

        </div>

        <div>
          <ValidationProvider v-slot="{ errors }" vid="agree" name="同意確認" rules="agree" >
            <label for="is_agree">
              <input id="is_agree" type="checkbox" v-model="contact.agree" /> 同意する
            </label>
            <p v-show="errors.length" class="help is-danger">
              {{ errors[0] }}
            </p>
          </ValidationProvider>
        </div>

      <button type="submit" :disabled="ObserverProps.invalid || !ObserverProps.validated">確認画面へ</button>
      </ValidationObserver>
    </form>
  </div>
</template>


<style lang="scss" scoped>
.container {
  text-align: center;
}

.is-danger {
  color: red;
}
</style>

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
        agree: '',
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
    },
  }
}
</script>
