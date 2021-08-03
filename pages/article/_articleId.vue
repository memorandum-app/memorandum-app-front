<template>
    <div class="article-main-container">
        <div class="related-articles">
            <div id="related-title">
                <h2>関連記事</h2>
            </div>
            <div v-for="(articleListItem,index) in articleList" v-bind:key="articleListItem.articleId">
                <div id="related-articles-object" v-if="index < 5">
                    <h3>{{articleListItem.articleTitle}}</h3>
                    <h5>by {{articleListItem.author}}</h5>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    data() {
        return {
            articleInfo: {},
            articleList: []
        }
    },
    created() {
        this.init()
    },
    methods: {
        init() {
            this.getArticleInfo(String(this.$route.params.articleId))
            this.articleInfo = this.$store.state.Article.articleInfo
            this.getArticleList()
            this.articleList = this.$store.state.Article.articleList
        },
        ...mapActions('Article', [
            'getArticleInfo', 'getArticleList'
        ])
    }
}
</script>

<style lang="scss" scoped>
.article-main-container {
    height: auto;
    & .related-articles {
        background-color: Red;
        width: 60%;
        margin: 0 auto;

        & #related-title {
            padding-left: 10px;
            font-size: 30px;
            line-height: 0px;
        }
        & #related-articles-object{
            border-top: 2px solid black;
            line-height: 0px;
            & h3{
                padding-left: 20px;
                font-size: 28px;
            }
            & h5{
                padding-left: 30px;
                font-size: 15px;
            }
        }
    }
}
</style>