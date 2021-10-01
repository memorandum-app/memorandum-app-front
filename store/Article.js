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
    }
})

export const mutations = {
    getArticleInfo(state, payload) {
        state.articleInfo.articleId = payload.articleId,
        state.articleInfo.articleTitle = payload.articleTitle,
        state.articleInfo.authorId = payload.authorId,
        state.articleInfo.author = payload.author,
        state.articleInfo.language = payload.language,
        state.articleInfo.createdDate = payload.createdDate,
        state.articleInfo.updateDate = payload.updateDate,
        state.articleInfo.category = payload.category,
        state.articleInfo.articleItem = payload.articleItem
    }
}

export const actions = {
    async getArticleInfo({commit}, payload) {
        await api.get('/article/articleId', {
            params: {
                articleId: payload
            }
        })
        .then(response => {
            const value = {
                articleId: response.data.articleId,
                articleTitle: response.data.articleTitle,
                authorId: response.data.authorId,
                author: response.data.authorName,
                language: response.data.language,
                category: response.data.category,
                createDate: response.data.createdDate,
                updateDate: response.data.updateDate,
                articleItem: response.data.articleContentList
            }
            commit('getArticleInfo', value);
        })
        .catch(error => {
            console.log(error);
        })

    }
}