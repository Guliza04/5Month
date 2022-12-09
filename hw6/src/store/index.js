import { configureStore } from "@reduxjs/toolkit";
import CalculatorReducer from "./CalculatorSlice";

export default configureStore({
    reducer:{
        CalculatorReducer
    }
})