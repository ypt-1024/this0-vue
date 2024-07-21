import axios from "@/utils/axios.js";

export const listArticle = (article) => {
    return axios({
        url: '/article/showAll',
        method: 'post',
        data: article,
    })
}
