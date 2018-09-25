import * as app from '../types/app-types';
 
export const SETCRUMB = (newArray)=>{
    console.log('appAction执行')
    return {
        type: app.SETCRUMB,
        newArray
    }   
}