/**
 * 发送请求用的工具类
 * 需要发请求的时候直接调用
 */
import axios from 'axios'

const service =  axios.create({
    baseURL:'http://210.29.124.167:8008/api',//同样的请求地址部分
    timeout:'5000',//超时返回失败
})

export default service