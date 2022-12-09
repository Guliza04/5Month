import { createSlice } from "@reduxjs/toolkit";

const calculatorSlice=createSlice({
    name:'calculatorSlice',
    initialState:{
        number:'',
        number2:'',
        result:''
        
    },
    reducers:{
        changeNumber:(state,action)=>{
            state.number = action.payload
        },
        changeNumber2:(state,action)=>{
            state.number2 = action.payload
        },
        
        minusAction:(state,action)=>{
            state.number!=='' && state.number2!==''
             ? state.result = state.number-state.number2 
              : alert('error')
            state.number=''
            state.number2=''  
        },
        plusAction:(state,action)=>{
            state.number!=='' && state.number2!==''
            ? state.result = state.number+state.number2
             : alert('error')
            state.number=''
            state.number2=''    
        },
        divideAction:(state,action)=>{
            state.number!=='' && state.number2!==''
            ? state.result = state.number/state.number2
             : alert('error')

             state.number=''
             state.number2=''  
        },
        multiplyAction:(state,action)=>{
            state.number!=='' && state.number2!==''
            ? state.result = state.number*state.number2
             : alert('error')
             state.number=''
             state.number2=''  
        }
    }


})

export const {changeNumber,changeNumber2,multiplyAction,plusAction,minusAction,divideAction} = calculatorSlice.actions

export default calculatorSlice.reducer