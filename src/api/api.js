import axios from 'axios';

axios.interceptors.request.use(config => {
    config = {
        ...config,
        baseURL: '/api'
    };
    return config;
})

axios.interceptors.response.use(response => {
    return response;
})

//获取文章列表
export function getArticalList() {
    return axios.get('/artical/list');
}

//根据id查询文章详情
export function getArticalDetail(id) {
    return axios.get('/artical/detail', { params: { id } });
}