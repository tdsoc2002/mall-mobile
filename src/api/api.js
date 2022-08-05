import request from '@/utils/request.js'
//需要连接学校内网


//首页 api

export function getHome(){
    return request({
        url:'/index/banner',
        method:'get'
    });
}
//分类数据1
export function getCategory(){
    return request({
        url:'/category/index',
        method:'get'
    });
}

//分类数据2 - 不启用
export function getCurrentCategory(index){
    return request({
        url:'/api/category?id='+index,
        method:'get'
    });
}