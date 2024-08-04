import axios from 'axios'

axios.defaults.withCredentials = false;
const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL, // 目标服务器的URL
    timeout: 1000, // 请求超时时间
    // 下面可以配置更多的请求选项
});

export async function apiLogin(name, password) {
    let res = await instance.post('/mam/auth/login_pc', {
        name,
        password
    })
    return res
}