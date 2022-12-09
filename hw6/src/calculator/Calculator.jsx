import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeNumber, changeNumber2, divideAction, minusAction, multiplyAction, plusAction } from '../store/CalculatorSlice'

function Calculator() {
    
    const dispatch= useDispatch()
    const {result,number,number2}= useSelector(state=>state.CalculatorReducer)


  return (
    <div>
        {result}
        <input type="number" onChange={e=> dispatch(changeNumber(+e.target.value))} value={number} />
        <input type="number" onChange={e=> dispatch(changeNumber2(+e.target.value))} value={number2} />
        <button onClick={()=>dispatch(plusAction())}>+</button>
        <button onClick={()=>dispatch(minusAction())}>-</button>
        <button onClick={()=>dispatch(divideAction())}>/</button>
        <button onClick={()=>dispatch(multiplyAction())}>*</button>
    </div>
  )
}

export default Calculator