<template>
  <div>
    <div class="article">
      <picture class="article__visual">
        <source media="(min-width:1025px)" v-bind:srcset="post.acf.shop_image">
        <source media="(max-width:1024px)" v-bind:srcset="post.acf.shop_image">
        <img v-bind:src="post.acf.shop_image" alt="">
      </picture>
      <h2 class="article__ttl">{{ post.title.rendered }}</h2>
      <ul class="article__data">
        <li>{{ post.acf.shop_address }}</li>
        <li>{{ post.acf.shop_tel }}</li>
      </ul>
      <div class="article__body" v-html="post.content.rendered"></div>
      <NuxtLink :to="'/shops/'"  class="button">SHOPS TOPへ</NuxtLink>
    </div>
  </div>
</template>

<script>

	export default {
    layout: "original",
    components: {
    },
    props: {
      url: String,
      count: {
        type:String,
        default:"4",
      },
      noImage: {
        type:String,
        default:"/assets/img/common/no_image.png",
      },
    },
    async asyncData(context) {
      const post = await context.$axios.$get(`https://blog.cony-design.com/wp-json/wp/v2/shops/${context.params.id}/?acf_format=standard`)
      return { post }
    }
	};
</script>


<style lang="scss" scoped>
.article {
  max-width: 848px;
  padding-block-start: 100px;
  padding-inline: 24px;
  margin-inline: auto;

  &__ttl {
    font-size: 2em;
    padding-bottom: 60px;
  }

  &__visual {
    margin-block-end: 60px;
  }

  &__data {
    padding-block-end: 60px;
    margin-block-end: 60px;
    padding-inline: 0;
    margin-inline: 0;
    border-bottom: 1px solid var(--gray-50);
    list-style-type: none;

    > * {
      margin: 0 0 1em;
      padding: 0;

      &:nth-last-child(1) {
        margin: 0;
      }
    }
  }

  &__body {
    padding-bottom: 60px;
  }

  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--gray-50);
    padding: 12px;
    margin: 0;
    border-radius: 4px;
    text-align: center;
    text-decoration: none;
  }
}
</style>