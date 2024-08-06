import axios from "@/utils/axios.js";

export const listArticle = (article) => {
    return axios({
        url: '/article/showAll',
        method: 'post',
        data: article,
    })
}

export const showArticle = (id) => {
    return axios({
        url: `/article/${id}`,
        method: 'get',
    })
}

export const listArticleByUid = (uid) => {
    return axios({
        url: `/article/showAllByUid/${uid}`,
        method: 'get',
    })
}
