import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const {user,login,logout}=useAuth()
  return (
    <>
      <div className='bg-amber-400'>
         <nav className='flex justify-around items-center py-4 '>
            <Link to='/' className='text-2xl font-bold'>Ecommerce</Link>
            <div className='hidden md:flex'>
                {!user && (
                    <div className='flex gap-3 font-semibold'>
                      <Link to='/productlist' className='p-1 ' >ProductList</Link>
                      <Link to='/help' className='p-1' >Help & Support</Link>
                     <Link to='/login' className=' p-1 '>Login</Link>
                     <Link to='/signup' className=' p-1 '>Signup</Link>
                    
                    </div>
                )}

                 <div className='flex gap-3'>
                {user && user.type==='customer' && (
                    <Link to='/cart' className='bg-green-500 px-2 rounded-md'> 
                      My Cart
                    </Link>
                ) }

                {user && (
                    <button onClick={logout} className='bg-red-500 px-2 rounded-md'>
                        Logout
                    </button>
                )}
          </div>
            </div>
          
          <div className='flex md:hidden'>
            <h1>sohan</h1>
          </div>

         </nav>
         

      </div>   
    </>
  )
}

export default Navbar
