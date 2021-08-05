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
    background-color: gray;
    height:auto;

    & .related-articles {
        background-color: white;
        width: 70%;
        margin: 0 auto;
        border-top: 1px ;

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
        & #related-articles-object{
            position: relative;
            height: auto;
            & h3{
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