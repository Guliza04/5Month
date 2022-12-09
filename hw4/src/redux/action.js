
import { types } from "./types"

export const changeTitle=()=>{
    return {
        type:types.CHANGE_TITLE
    }
}


export const changeT = () => {
    return (dispatch)=>{
        setTimeout(()=>{
            return dispatch(changeTitle())
        },3000)
    }
}