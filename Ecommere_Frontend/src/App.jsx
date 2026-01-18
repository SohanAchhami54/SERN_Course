import { useState } from 'react'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import ProductList from './pages/ProductList'

function App() {
 const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<ProductList/>} />
  )
 )
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
