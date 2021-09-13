<template>
  <div class="article-main-container">
    <!-- <button @click="test">testButton</button> -->
    <div class="title">
      <p>{{ articleInfo.author }} {{ articleInfo.createdDate }}</p>
      <h1>{{ articleInfo.articleTitle }}</h1>
      <div class="category-container">
        <p><img src="~/assets/img/tag.png" /></p>
        <p class="category">{{ articleInfo.language }}</p>
      </div>
    </div>
    <!-- title -->
    <div class="main-container">
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
      <!-- v-for articleItem -->
    </div>
    <div class="related-articles">
      <div id="related-title">
        <h2>関連記事</h2>
      </div>
      <div
        v-for="(articleListItem, index) in articleList"
        v-bind:key="articleListItem.articleId"
      >
        <div id="related-articles-object" v-if="index < 5">
          <h3>{{ articleListItem.articleTitle }}</h3>
          <h5>by {{ articleListItem.author }}</h5>
        </div>
      </div>
    </div>
  </div>
  <!-- related-articles -->
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      articleInfo: {}
    };
  },
  created() {
    this.init();
  },
  mounted() {
    this.$nextTick(() => {
      PR.prettyPrint();
    });
  },
  methods: {
    init() {
      this.getArticleInfo(String(this.$route.params.articleId));
      this.articleInfo = this.$store.state.Article.articleInfo;
    },
    ...mapActions("Article", ["getArticleInfo"])
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/style.scss";
.article-main-container {
  color: $cText;
  padding-top: 40px;
  background-color: $cBackGround;
  & .title {
    border-radius: 15px;
    padding: 10px 40px;
    background-color: $cWhite;
    width: 60%;
    margin: 0 auto;
    margin-bottom: 50px;
    & .category-container {
      & p {
        display: inline-block;
        vertical-align: middle;
        height: 24px;
      }
      & .category {
        border: solid 1px $cCategory;
        border-radius: 15px;
        padding: 5px 10px 0 10px;
        background-color: $cCategory;
        &:hover {
          background-color: rgb(215, 215, 215);
          cursor: pointer;
        }
      }
    }
  }
  & .main-container {
    background-color: $cWhite;
    border-radius: 15px;
    width: 60%;
    margin: 0 auto;
    padding: 10px 40px;
    & .main-article {
      & .heading {
        margin-bottom: 40px;
        position: relative;
        &::before {
          content: "";
          text-decoration: underline;
          background-color: $cBorder;
          position: absolute;
          width: 100%;
          height: 1px;
          top: 40px;
          left: 0;
          box-shadow: $sBox;
        }
        &::after {
          content: "";
          text-decoration: underline;
          background-color: $cBorder;
          position: absolute;
          width: 100%;
          height: 1px;
          top: 45px;
          left: 0;
          box-shadow: $sBox;
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
          background-color: $cBorder;
          position: absolute;
          width: 50%;
          height: 1px;
          top: 40px;
          left: 0;
          box-shadow: $sBox;
        }
      }
      & img {
        margin-bottom: 40px;
        width: 500px;
      }
    }
  }
  & .related-articles {
    border-radius: 15px;
    padding: 10px 40px;
    background-color: white;
    width: 60%;
    margin: 0 auto;
    margin-top: 50px;
    border-top: 1px;

    & #related-title {
      position: relative;
      & h2 {
        height: auto;
        margin: 0 auto;
        padding-top: 3px;
        padding-left: 10px;
        font-size: 32px;
        font-weight: normal;
        cursor: default;
      }
    }
    & #related-articles-object {
      position: relative;
      height: auto;
      & h3 {
        display: inline-block;
        margin: 0 auto;
        padding: 8px 0px 2px 20px;
        font-size: 28px;
        font-weight: normal;

        &:hover {
          cursor: pointer;
          text-decoration: underline;
        }
      }
      & h5 {
        margin: 0 auto;
        padding: 0px 0px 3px 30px;
        font-size: 15px;
        font-weight: normal;
      }
      &:hover {
        background-color: rgb(228, 228, 228);
        box-shadow: 0 4px 7px 0 rgba(0, 0, 0, 0.5);
        transform: translateY(-1px);
        transition: all 0.3s ease 0s;
      }
      &::before {
        position: absolute;
        content: "";
        background-color: black;
        width: 100%;
        height: 1px;
        left: 0;
        box-shadow: 0px 0.5px;
      }
    }
  }
}
</style>
