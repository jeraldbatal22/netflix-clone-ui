import React from 'react'
import netflexLogo from '../images/netflix-logo.jpg'
import userProfile from '../images/jerald.jpg'

const Header = () => {
  return (
    <header className='font-montserrat'>
      <nav className='sm:px-10 flex justify-between px-0 text-white' style={{ background: '#080808' }}>
        <ul className=' flex items-center ' style={{ fontSize: '14px' }}>
          <li className='mr-4 '><img src={netflexLogo} alt="" className="w-20 sm:w-36" /></li>
          <li className='mr-4 flex sm:hidden font-semibold'>Browser
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </li>
          <li className='mr-4 hidden sm:flex'>Home</li>
          <li className='mr-4 hidden sm:flex'>Tv Shows</li>
          <li className='mr-4 hidden sm:flex'>Movies</li>
          <li className='mr-4 hidden sm:flex'>New & Popular</li>
          <li className='mr-4 hidden sm:flex'>My List</li>
        </ul>
        <ul className='flex items-center'>
          <li className='mr-4 hidden sm:flex'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </li>
          <li className='mr-4 hidden sm:flex'>Kids</li>
          <li className='mr-4'>
            <div className='relative'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-7 sm:w-7" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
              <p className='absolute bg-red-600 px-1 rounded-full' style={{ bottom: 'calc(100% - 15px)', right: 0, fontSize: '12px' }}>7</p>
            </div>
          </li>
          <li className='mr-4 inline-flex'>
            <div className='mr-2'><img src={userProfile} alt="" className="rounded-md w-7 sm:w-10 " /></div>
            <div className='items-center hidden sm:flex'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header