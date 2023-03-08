import {BrowserRouter,Routes,Route} from "react-router-dom";
import React from 'react'
import Drop from './Drop'
import Page from './Page'
import Update from './Update'
import Display from "./Display"
import Delete from "./Delete";
export default function App() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
        <Route path='/' element ={<Drop/>}></Route>
          <Route path="/Display" element={<Display/>}></Route>
        <Route path='/Page' element ={<Page/>}></Route>
        <Route path='/Update'element ={<Update/>}></Route>
        <Route path='/Delete' element ={<Delete/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}
