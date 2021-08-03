// import './vendors/google-code-prettify/prettify';

export const state = () => ({
    articleInfo: {
        articleId: "",
        articleTitle: "",
        authorId: "",
        author: "",
        category: "",
        createdDate: null,
        articleTag: [],
        articleItem: []
    },
    articleList: []
})

export const mutations = {
    getArticleInfo(state, payload) {
        const dummyDate = new Date()
        // console.log(dummyDate.getMonth())
        state.articleInfo = {
            articleId: "ABcd1234",
            articleTitle: "記事タイトル",
            authorId: "1234abCD",
            author: "佐々木テポドン",
            category: "Java",
            createdDate: `${dummyDate.getFullYear()}/${dummyDate.getMonth()+1}/${dummyDate.getDate()}`,
            articleTag: ["Spring Boot","Mysql","Mybatis"],
            articleItem: [
                {
                    style: "h1",
                    content: "見出し(h1)"
                },
                {
                    style: "p",
                    content: "テキスト(p)サンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsample"
                },
                {
                    style: "h2",
                    content: "見出し(h2)"
                },
                {
                    style: "img",
                    content: "https://lesson-evaluation.com/static/img/tmp/program_01.jpg"
                },
                {
                    style: "h1",
                    content: "見出し(h1)"
                },
                {
                    style: "p",
                    content: "テキスト(p)サンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsampleサンプルsample"
                },
                {
                    style: "code",
                    content: `export const state = () => ({
                            textState: {
                                aaa: ""
                            }
                    })`
                }
            ]
        }
    },
    getArticleList(state, payload) {
        state.articleList = [
            {
                articleId: "ABcd1234",
                articleTitle: "記事タイトル",
                authorId: "1234abCD",
                author: "佐々木テポドン",
                category: "Java",
                articleTag: ["Spring Boot","Mysql","Mybatis"]
            },
            {
                articleId: "ABcd1235",
                articleTitle: "記事タイトル",
                authorId: "1234abCD",
                author: "佐々木テポドン",
                category: "Java",
                articleTag: ["Spring Boot","Mysql","Mybatis"]
            },
            {
                articleId: "ABcd1236",
                articleTitle: "記事タイトル",
                authorId: "1234abCD",
                author: "佐々木テポドン",
                category: "Java",
                articleTag: ["Spring Boot","Mysql","Mybatis"]
            },
            {
                articleId: "ABcd1237",
                articleTitle: "記事タイトル",
                authorId: "1234abCD",
                author: "佐々木テポドン",
                category: "Java",
                articleTag: ["Spring Boot","Mysql","Mybatis"]
            },
        ]
    }
}

export const actions = {
    getArticleInfo({commit}, payload) {
        commit('getArticleInfo', payload)
    },
    getArticleList({commit}, payload) {
        commit('getArticleList', payload)
    }
}