import * as app from '../types/app-types';
 
export const SETCRUMB = (newArray)=>{
    console.log('appAction执行')
    return {
        type: app.SETCRUMB,
        newArray
    }   
}

//设置路由Key
export const SETROUTEKEY = (newKey)=>{
    console.log('appAction执行')
    return {
        type: app.SETROUTEKEY,
        newKey
    }   
}