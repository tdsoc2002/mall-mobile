import request from '@/utils/request.js'
//需要连接学校内网


//首页 api

export function getHome(){
    return request({
        url:'/index/banner',
        method:'get'
    });
}