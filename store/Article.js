// import './vendors/google-code-prettify/prettify';
import axios from 'axios'
const api = axios.create()
api.defaults.baseURL='http://localhost:8080'
export const state = () => ({
    articleInfo: {
        articleId: "",
        articleTitle: "",
        authorId: "",
        author: "",
        language: "",
        createdDate: null,
        updateDate: null,
        category: [],
        articleItem: [],
        // test: 'hello'
    },
    articleList: []
})


export const mutations = {
    getArticleInfo(state, payload) {
        // const dummyDate = new Date(),
        state.articleInfo.articleId = payload.articleId,
        state.articleInfo.articleTitle = payload.articleTitle,
        state.articleInfo.authorId = payload.authorId,
        state.articleInfo.author = payload.author,
        state.articleInfo.language = payload.language,
        state.articleInfo.createdDate = payload.createdDate,
        state.articleInfo.updateDate = payload.updateDate,
        state.articleInfo.category = payload.category,
        state.articleInfo.articleItem = payload.articleItem
    },
    getArticleList(state, payload) {
        state.articleList = [
            {
                articleId: "ABcd1234",
                articleTitle: "記事タイトル",
                authorId: "1234abCD",
                author: "佐々木テポドン",
                language: "Java",
                category: ["Spring Boot","Mysql","Mybatis"]
            },
            {
                articleId: "ABcd1235",
                articleTitle: "記事タイトル",
                authorId: "1234abCD",
                author: "佐々木テポドン",
                language: "Java",
                category: ["Spring Boot","Mysql","Mybatis"]
            },
            {
                articleId: "ABcd1236",
                articleTitle: "記事タイトル",
                authorId: "1234abCD",
                author: "佐々木テポドン",
                language: "Java",
                category: ["Spring Boot","Mysql","Mybatis"]
            },
            {
                articleId: "ABcd1237",
                articleTitle: "記事タイトル",
                authorId: "1234abCD",
                author: "佐々木テポドン",
                language: "Java",
                category: ["Spring Boot","Mysql","Mybatis"]
            },
        ]
    }
}
export const actions = {
    async getArticleInfo({commit}, payload) {
        console.log('testaaaaaaaaaa');
        // const url = 'http://localhost:3000/api/';
        await api.get('/article/articleId', {
            params: {
                articleId: payload
            }
        })
        .then(response => {
            const value = {
                articleId: response.data.article_id,
                articleTitle: response.data.article_title,
                authorId: response.data.author_id,
                author: response.data.author_name,
                language: response.data.language,
                category: response.data.category,
                createDate: response.data.created_date,
                updateDate: response.data.update_date,
                articleItem: response.data.article_content_list
            }
            commit('getArticleInfo', value);
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })

    },
    getArticleList({commit}, payload) {
        commit('getArticleList', payload)
    }
}

// export const getters = {
//     articleInfo: state => {
//         return state.articleInfo;
//     }
// };
