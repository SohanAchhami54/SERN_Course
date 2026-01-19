import './App.css'
import {BrowserRouter, createBrowserRouter, createRoutesFromElements, Navigate, Route, Router, RouterProvider, Routes} from 'react-router-dom'
import ProductList from './pages/ProductList'
import ProductDetail from './pages/ProductDetail'
import { AuthProvider, useAuth } from './contexts/AuthContext'
import SignIn from './components/SignIn'
import Mainlayout from './components/Layout/Mainlayout'
import Home from './pages/Home'
import Error from './pages/Error'
import Help from './pages/Help'
import SignUp from './components/SignUp'



const AppRoute=()=>{
  const {user}=useAuth()
  console.log('user value are:',user)
  return (
    <>
     {/* <AuthProvider></AuthProvider> */}
      <Routes>
      <Route  path='/' element={<Mainlayout/>}>
      <Route index element={<Home/>} />
      <Route path='/productlist' element={<ProductList/>} />
      {/* <Route path='/login' element={ <SignIn/>} /> */}
      <Route path='/help' element={<Help />} />
      <Route path='/products/:id' element={<ProductDetail/>}/>
      <Route path='*' element={<Error/>} />
      <Route
          path="login"
          element={user ? <Navigate to="/" replace /> : <SignIn />}
        />
        <Route
          path="signup"
          element={user ? <Navigate to="/" replace /> : <SignUp />}
        />        
       </Route>
       </Routes>  
    </>
  )
}

const App=()=>{
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoute/>
      </BrowserRouter>  
    </AuthProvider>
  )
}
export default App
// function App() {
//   const {user}=useAuth()
//  const router=createBrowserRouter(
//   createRoutesFromElements(
    
//     <>
    
//       <Route  path='/' element={<Mainlayout/>}>
//       <Route index element={<Home/>} />
//        <Route path='/productlist' element={<ProductList/>} />
//        <Route path='/login' element={user? <Navigate to='/' replace/>: <SignIn/>} />
//        {/* <Route path='/signup' element={user? <Navigate to='/' replace/>: <SignIn/>} /> */}
//        <Route path='/help' element={<Help />} />
//        <Route path='/products/:id' element={<ProductDetail/>}/>
//        <Route path='*' element={<Error/>} />
//        </Route>
        
//     </>
    
//   )
//  )
//   return (
//     <>
//       <RouterProvider router={router} />
//     </>
//   )
// }

// export default App
