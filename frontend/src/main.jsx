import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootreducer from './reducers';
import { Toaster } from "react-hot-toast";






const store = configureStore({
  reducer : rootreducer,
})


createRoot(document.getElementById('root')).render(



  <Provider store = {store} >
      <BrowserRouter>

               <App/>
              <Toaster/>
              
       </BrowserRouter>
</Provider>


)
