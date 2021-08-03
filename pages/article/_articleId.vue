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
  methods: {
    init() {
      this.getArticleInfo(String(this.$route.params.articleId));
      this.articleInfo = this.$store.state.Article.articleInfo;
      this.getArticleList();
      this.articleList = this.$store.state.Article.articleList;
    },
    ...mapActions("Article", ["getArticleInfo", "getArticleList"])
  }
    //   mounted () {
    //   // https://github.com/google/code-prettify/issues/578
    //   const prettyPrint = require('code-prettify')
    //   this.$nextTick(function () {
    //     prettyPrint.prettyPrint()
    //   })
    // }
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

/* Doxy pretty-printing styles. Used with prettify.js.  */

pre .str,
code .str {
  color: #fec243;
} /* string  - eggyolk gold */
pre .kwd,
code .kwd {
  color: #8470ff;
} /* keyword - light slate blue */
pre .com,
code .com {
  color: #32cd32;
  font-style: italic;
} /* comment - green */
pre .typ,
code .typ {
  color: #6ecbcc;
} /* type - turq green */
pre .lit,
code .lit {
  color: #d06;
} /* literal - cherry red */
pre .pun,
code .pun {
  color: #8b8970;
} /* punctuation - lemon chiffon4  */
pre .pln,
code .pln {
  color: #f0f0f0;
} /* plaintext - white */
pre .tag,
code .tag {
  color: #9c9cff;
} /* html/xml tag  (bluey)  */
pre .htm,
code .htm {
  color: #dda0dd;
} /* html tag  light purply*/
pre .xsl,
code .xsl {
  color: #d0a0d0;
} /* xslt tag  light purply*/
pre .atn,
code .atn {
  color: #46eeee;
  font-weight: normal;
} /* html/xml attribute name  - lt turquoise */
pre .atv,
code .atv {
  color: #eeb4b4;
} /* html/xml attribute value - rosy brown2 */
pre .dec,
code .dec {
  color: #3387cc;
} /* decimal - blue */

a {
  text-decoration: none;
}
pre.prettyprint,
code.prettyprint {
  font-family: "Droid Sans Mono", "CPMono_v07 Bold", "Droid Sans";
  font-weight: bold;
  font-size: 9pt;
  background-color: #0f0f0f;
  -moz-border-radius: 8px;
  -webkit-border-radius: 8px;
  -o-border-radius: 8px;
  -ms-border-radius: 8px;
  -khtml-border-radius: 8px;
  border-radius: 8px;
} /*  background is black (well, just a tad less dark )  */

pre.prettyprint {
  width: 95%;
  margin: 1em auto;
  padding: 1em;
  white-space: pre-wrap;
}

pre.prettyprint a,
code.prettyprint a {
  text-decoration: none;
}
/* Specify class=linenums on a pre to get line numbering; line numbers themselves are the same color as punctuation */
ol.linenums {
  margin-top: 0;
  margin-bottom: 0;
  color: #8b8970;
} /* IE indents via margin-left */
li.L0,
li.L1,
li.L2,
li.L3,
li.L5,
li.L6,
li.L7,
li.L8 {
  list-style-type: none;
}
/* Alternate shading for lines */
// li.L1,li.L3,li.L5,li.L7,li.L9 { }

/* print is mostly unchanged from default at present  */
@media print {
  pre.prettyprint,
  code.prettyprint {
    background-color: #fff;
  }
  pre .str,
  code .str {
    color: #088;
  }
  pre .kwd,
  code .kwd {
    color: #006;
    font-weight: bold;
  }
  pre .com,
  code .com {
    color: #0c3;
    font-style: italic;
  }
  pre .typ,
  code .typ {
    color: #404;
    font-weight: bold;
  }
  pre .lit,
  code .lit {
    color: #044;
  }
  pre .pun,
  code .pun {
    color: #440;
  }
  pre .pln,
  code .pln {
    color: #000;
  }
  pre .tag,
  code .tag {
    color: #b66ff7;
    font-weight: bold;
  }
  pre .htm,
  code .htm {
    color: #606;
    font-weight: bold;
  }
  pre .xsl,
  code .xsl {
    color: #606;
    font-weight: bold;
  }
  pre .atn,
  code .atn {
    color: #c71585;
    font-weight: normal;
  }
  pre .atv,
  code .atv {
    color: #088;
    font-weight: normal;
  }
}
</style>
