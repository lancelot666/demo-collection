import * as app from '../types/app-types';
let defaultState = {
    appName:'demo集合', //AppName
    crumb:[],           //面包屑
    routeKey:'',        //路由路径Key
};
export const appData = (state=defaultState,action={})=>{
    switch(action.type){
        case app.SETCRUMB:
            return {...state,...{crumb:action.newArray}}
        // case app.SETROUTEKEY:
        //     return {...state,...{routeKey:action.newKey}}
        default:
            return state;
    }
}