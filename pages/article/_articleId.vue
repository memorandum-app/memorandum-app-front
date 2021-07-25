<template>
    <div class="article-main-container">
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
    
}
</style>