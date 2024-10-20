import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='h-16 shadow-md w-screen flex items-center justify-between px-8'>
        <h1 className='text-xl font-bold'>My App</h1>
        <div className='flex items-center gap-8'>
            <Link to='/'>Go Home</Link>
            <Link to='/about'>About</Link>
        </div>
    </div>
  )
}

export default NavBar
