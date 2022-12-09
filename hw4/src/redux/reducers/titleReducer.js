import { types } from "../types";

const initial ={
    title:'old text'
}

export const titleReducer = (state=initial,action)=>{
    switch(action.type){
        case types.CHANGE_TITLE:
            return {...state,title:'new text'}
        default: return state
    }
}