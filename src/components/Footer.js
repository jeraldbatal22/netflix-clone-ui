import React from 'react'

const Footer = () => {
  return (
    <footer className='h-80 mb-3 text-gray-400 flex items-center font-montserrat sm:w-1/2 px-4 mx-auto'>
      <div className='flex flex-col gap-4 ' style={{ fontSize: '13px' }}>
        <div className='flex gap-4 text-3xl text-white'>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-youtube"></i>
        </div>
        <div className='grid sm:grid-cols-4 grid-cols-2'>
          <ul className="flex flex-col gap-2 sm:mr-32">
            <li>Audio and Subtitles</li>
            <li>Media Center</li>
            <li>Privacy</li>
            <li>Contact Us</li>
          </ul>
          <ul className="flex flex-col gap-2 sm:mr-32">
            <li>Audio Description</li>
            <li>Investor Relations</li>
            <li>Legal Notice</li>
          </ul>
          <ul className="flex flex-col gap-2 sm:mr-32">
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
          </ul>
          <ul className="flex flex-col gap-2 sm:mr-32">
            <li>Gift Cards</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>
          </ul>
        </div>
        <div>
          <button className='p-2' style={{ border: '1px solid white' }}>Service Code</button>
        </div>
        <span style={{ fontSize: '11px' }}>c 1997-2022 Netflix, Inc.f5a824d7-aa83-496e-acfc-8e15c84f6b80</span>
      </div>
    </footer>
  )
}

export default Footer