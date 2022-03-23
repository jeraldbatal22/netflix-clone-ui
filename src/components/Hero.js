import React, { useEffect, useState } from 'react'
import heroImage from '../images/hero.jpg'
import MovieList from './MovieList'

const Hero = () => {
  const [movieList, setMovieList] = useState(null)
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a13bec95d0722d973f936159638fff65').then(
      res => res.json()
    ).then(data => setMovieList(data.results))
  }, [])
  // console.log(movieList)
  return (
    <div className='relative'>
      {movieList && movieList.length > 0 &&
        <div className='relative text-white font-montserrat'>
          <img src={heroImage} alt="" className='w-full' />
          <div className='absolute inset-0 px-10 h-full mt-36'>
            <div className='text-8xl'>
              <h1>{movieList[0].title.split(' ')[0]}</h1>
              <h1>{movieList[0].title.split(' ')[1]}</h1>
            </div>
            <p className='w-4/12 my-8' style={{ fontSize: '26.88px' }}>{movieList[0].overview}</p>
            <div className='flex gap-4'>
              <button className='bg-white hover:bg-gray-300 px-6 py-3 rounded-lg text-black flex gap-2 font-semibold  items-center' style={{ fontSize: '24.88px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Play
              </button>
              <button className='bg-gray-600 px-6 py-3 hover:bg-gray-800 rounded-lg text-gray-100 font-semibold flex gap-2 items-center' style={{ fontSize: '24.88px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                More Info
              </button>
            </div>
          </div>
        </div>
      }
      <MovieList movieList={movieList} />
    </div>
  )
}

export default Hero