import axios from "@/utils/axios.js";

// 查询所有文章分类
export const listCategory = () => {
    return axios({
        url: '/category/showAll', method: 'get'
    })
}

export const addCategory = (category) => {
    return axios({
        url: `/category`,
        method: `post`,
        data: category,
    })
}

export const updateCategory = (category) => {
    return axios({
        url: `/category`,
        method: `put`,
        data: category,
    })
}

export const removeCategoryById = (cid) => {
    return axios({
        url: `/category/${cid}`,
        method: `delete`,
    })
}