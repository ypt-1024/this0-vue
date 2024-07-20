import axios from "@/utils/axios.js";

// 查询所有文章分类
export const listCategory = () => {
    return axios({
        url: '/category/showAll', method: 'get'
    })
}