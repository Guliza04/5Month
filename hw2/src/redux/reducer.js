import { types } from "./type";



const intial ={
    number1: '',
    number2:'',
    result: 0
}

export const reducer = (state = intial,action)=>{
    switch(action.type){
        case types.NUMBER1:
            console.log(state.number1);
            return{...state, number1: action.payload}
        case types.NUMBER2:
            console.log(state.number2);
            return{...state,number2: action.payload}
        case types.PLUS:
            console.log(state.result);
            return {...state,  result: state.number1!=='' && state.number2!=='' ? state.number1+state.number2: alert('error'),number2:"", number1:""}
        case types.MINUS:
            console.log(state.result);
            return {...state,  result: state.number1!=='' && state.number2!=='' ? state.number1-state.number2: alert('error'),number2:"",number1:""}
        case types.MULTIPY:
            console.log(state.result);
            return {...state,  result: state.number1!=='' && state.number2!=='' ? state.number1*state.number2: alert('error'),number2:"",number1:""}
        case types.DEVIDE:
            console.log(state.result);
            return {...state,  result: state.number1!=='' && state.number2!=='' ? state.number1/state.number2: alert('error'),number2:"",number1:""}

        default:
            return state
    }

}