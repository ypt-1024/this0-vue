import axios from "@/utils/axios.js";

export const login = (user) => {
  return axios({
    url: '/user/login',
    method: 'post',
    data: user,
  })
}
