import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div>
        <h1 className='text-4xl font-semibold text-center p-10'>XR Experience</h1>
        <div className='flex justify-center'>
        <Link className='p-2 px-5 rounded-md m-5 border bg-slate-300' to={'/ar'}>Enter in AR</Link>
        <Link className='p-2 px-5 rounded-md m-5 border bg-slate-300' to={'/vr'}>Enter in VR</Link>
        </div>
        
    </div>
  )
}

export default Homepage