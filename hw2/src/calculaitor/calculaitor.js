import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { types } from '../redux/type';

function Calculaitor() {
     
     const dispatch = useDispatch()

    let result = useSelector(state => state.result)
    let number1 = useSelector(state=> state.number1)
    let number2 = useSelector(state=> state.number2)

    const handleChange1 = (e) => {
        console.log(Number(e.target.value));
        dispatch({
            type: types.NUMBER1,
            payload: Number(e.target.value)
        })
    }
     
    const handleChange2 = (e) => {
        console.log(Number(e.target.value));
        dispatch({
            type: types.NUMBER2,
            payload: Number(e.target.value)
        })
    }
     
    const handleAdd = () => {
        dispatch({
             type: types.PLUS
         })
     }
    const handleMinus = () => {
        dispatch({
             type: types.MINUS
         })
     }
    const handleDevide = () => {
        dispatch({
             type: types.DEVIDE
         })
     }
    const handleMulipy = () => {
        dispatch({
             type: types.MULTIPY
         })
     }

  return (
      <div>
          <h1>{ result}</h1>
          <input type="number"onChange={handleChange1} placeholder='number1' value={number1} />
          <input type="number" onChange={handleChange2} placeholder='number2' value={number2} />
          <button onClick={handleAdd}>+</button>
          <button onClick={handleMinus}>-</button>
          <button onClick={handleDevide}>/</button>
          <button onClick={handleMulipy}>*</button>
    </div>
  )
}
export default Calculaitor;
