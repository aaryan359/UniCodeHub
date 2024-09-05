


import { combineReducers } from  "@reduxjs/toolkit"

import authReducer from "../reducers/slices/authSlice"
import   profilereducer from '../reducers/slices/profileSlice'

const  rootreducer = combineReducers({

     auth : authReducer,
     profile:profilereducer,
 
      
})
export default rootreducer;
