import * as app from '../types/app-types';
let defaultState = {
    appName:'demo集合',
    crumb:[],
};
export const appData = (state=defaultState,action={})=>{
    switch(action.type){
        case app.SETCRUMB:
            return {...state,...{crumb:action.newArray}}
        default:
            return state;
    }
}