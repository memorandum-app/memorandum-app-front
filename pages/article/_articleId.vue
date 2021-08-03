<template>
  <div class="article-main-container">
    <div class="title">
      <p>{{ articleInfo.author }} {{ articleInfo.createdDate }}</p>
      <h1>{{ articleInfo.articleTitle }}</h1>
      <div class="category-container">
        <p><img src="~/assets/img/tag.png" /></p>
        <p>{{ articleInfo.category }}</p>
      </div>
    </div>
    <div
      v-for="item in articleInfo.articleItem"
      :key="item.index"
      class="main-article"
    >
      <div v-if="item.style === 'h1'">
        <h1 class="heading">{{ item.content }}</h1>
      </div>
      <div v-else-if="item.style === 'p'">
        <p class="text">{{ item.content }}</p>
      </div>
      <div v-else-if="item.style === 'h2'">
        <h2 class="sub-heading">{{ item.content }}</h2>
      </div>
      <div v-else-if="item.style === 'img'">
        <img class="img" :src="item.content" alt="" />
      </div>
      <div v-else>
        <pre class="prettyprint">{{ item.content }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      articleInfo: {},
      articleList: []
    };
  },
  created() {
    this.init();
  },
  mounted () {
    this.$nextTick(() => {
      PR.prettyPrint();
    })
  },
  methods: {
    init() {
      this.getArticleInfo(String(this.$route.params.articleId));
      this.articleInfo = this.$store.state.Article.articleInfo;
      this.getArticleList();
      this.articleList = this.$store.state.Article.articleList;
    },
    ...mapActions("Article", ["getArticleInfo", "getArticleList"])
  }
};
</script>

<style lang="scss" scoped>
$cWhite: white;
.article-main-container {
  padding-top: 40px;
  background-color: #ececec;
  & .title {
    padding: 10px 40px;
    background-color: $cWhite;
    width: 1040px;
    margin: 0 auto;
    margin-bottom: 80px;
    & .category-container {
      & p {
        display: inline-block;
        vertical-align: middle;
        height: 24px;
      }
    }
  }
  & .main-article {
    padding: 10px 40px;
    background-color: $cWhite;
    width: 1040px;
    margin: 0 auto;
    & .heading {
      margin-bottom: 40px;
      position: relative;
      &::before {
        content: "";
        text-decoration: underline;
        background-color: black;
        position: absolute;
        width: 1000px;
        height: 1px;
        top: 40px;
        left: 0;
        box-shadow: 3px 1px 2px;
      }
      &::after {
        content: "";
        text-decoration: underline;
        background-color: black;
        position: absolute;
        width: 1000px;
        height: 1px;
        top: 45px;
        left: 0;
        box-shadow: 3px 1px 2px;
      }
    }
    & .text {
      margin-bottom: 40px;
    }
    & .sub-heading {
      margin-bottom: 40px;
      position: relative;
      &::before {
        content: "";
        text-decoration: underline;
        background-color: black;
        position: absolute;
        width: 500px;
        height: 1px;
        top: 40px;
        left: 0;
        box-shadow: 3px 1px 2px;
      }
    }
    & img {
      margin-bottom: 40px;
      width: 500px;
    }
  }
}
</style>
