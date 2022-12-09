import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeTitle } from '../redux/action'

function ChangeTitle() {
    
    const dispatch=useDispatch()

    const title = useSelector(state=>state.titleReducer.title)
    const handleChange=()=>{
      dispatch(changeTitle())
    }
  return (

    <div>
        <h1>{title}</h1>
      
        <button onClick={handleChange}>changeTitle</button>
    </div>
    
  )
}

export default ChangeTitle