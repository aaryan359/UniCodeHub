import { useState } from 'react'

import './App.css'
import Header from './components/homepage/Header.jsx'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home.jsx'
import Components from './components/pages/Components.jsx'
import Contribute from './components/pages/Contribute.jsx'
import Blogs from './components/pages/Blogs.jsx'
import Signup from './components/homepage/Signup.jsx'
import Login from './components/homepage/Login.jsx'


function App() {
  

  return (

    <>
              {/* header part start */}

                     <Header/>

                     <Routes>

                                     <Route path = "/" element ={<Home/>}  />
                                     <Route  path =  "/components"  element = {<Components/>} />
                                     <Route  path='/contribute' element = {<Contribute/>}  />
                                     <Route  path='/blogs' element = {<Blogs/>}  />
                                     <Route  path =  "/signup"  element = {<Signup/>} />
                                     <Route  path='/login' element = {<Login/>}  />

                     </Routes>
           

              {/* header part end */}
    </>
  )
}

export default App
