import Vue from 'vue'
import { ValidationProvider, ValidationObserver, localize, extend } from 'vee-validate'
import ja from 'vee-validate/dist/locale/ja.json' // エラーメッセージを日本語化します
import { required, numeric, email, confirmed} from 'vee-validate/dist/rules' // 使用するバリデーションルールを指定します。

// VeeValidateが用意している各ルールを使用するよう指定
extend('required', required) // 必須項目のバリデーション
extend('numeric', numeric)
extend('email', email)
extend('confirmed', confirmed)
extend('customEmail', {
  ...email,
  validate(value) {
    // 全角文字の正規表現
    const fullWidthCharRegex = /[^\u0020-\u007E]+/
    // 全角文字が含まれている場合は false を返す
    if (fullWidthCharRegex.test(value)) {
      return false
    }
    // email ルールの結果を返す
    return email.validate(value)
  },
  message: '出力するエラーメッセージ',
})

extend('agree', (value) => {
  if (!value) {
    return '同意してください';
  }
  return true;
});

// 下記は固定で書く
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
localize('ja'); // 言語を日本語に
localize({
  ja: {
    messages: ja.messages, // メッセージのアクティブ化
    names: {
      firstName: "名前",
    },
  },
});


