import React, { useEffect, useState } from 'react'
import sunImage from '../images/sun.jpg'
import Footer from './Footer'

const MovieList = () => {
  // console.log(movieList[0].backdrop_path)
  const [movieList, setMovieList] = useState(null)
  const [kidsMovies, setKidsMovies] = useState(null)
  const [dramaMovies, setDramaMovies] = useState(null)
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=a13bec95d0722d973f936159638fff65').then(
      res => res.json()
    ).then(data => setKidsMovies(data.results))
    fetch('https://api.themoviedb.org/3/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10&api_key=a13bec95d0722d973f936159638fff65').then(
      res => res.json()
    ).then(data => setDramaMovies(data.results))
    fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a13bec95d0722d973f936159638fff65').then(
      res => res.json()
    ).then(data => setMovieList(data.results))
  }, [])
  console.log(dramaMovies)
  return (
    <div className='px-4 sm:px-10' >
      <h1 className='text-white text-3xl font-semibold mb-5'>Popular Movies</h1>
      <div className='grid grid-cols-2 sm:grid-cols-6 gap-2 sm:gap-10 flex-wrap' >
        {movieList && movieList.length > 0 && movieList.map((movie, index) => (
          <div key={index} className="flex">
            {/* {movie.title} */}
            <div>
              <img src={movie.backdrop_path ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` : sunImage} alt="" width={300} className="sm:rounded-md transition duration-500 ease-in-out hover:-translate-y-8 hover:scale-110  cursor-pointer" />
            </div>
          </div>
        ))
        }
      </div>
      <br></br>
      <br></br>

      <h1 className='text-white text-3xl font-semibold mb-5'>Kids Movies</h1>
      <div className='grid grid-cols-2 sm:grid-cols-6 gap-2 sm:gap-10 flex-wrap' >
        {kidsMovies && kidsMovies.length > 0 && kidsMovies.map((movie, index) => (
          <div key={index} className="flex">
            {/* {movie.title} */}
            <div>
              <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="" width={300} className="sm:rounded-m transition duration-500 ease-in-out hover:-translate-y-8 hover:scale-110  cursor-pointer" />
            </div>
          </div>
        ))
        }
      </div>
      <br></br>
      <br></br>

      <h1 className='text-white text-3xl font-semibold mb-5'>Drama Movies</h1>
      <div className='grid grid-cols-2 sm:grid-cols-6 gap-2 sm:gap-10 flex-wrap' >
        {dramaMovies && dramaMovies.length > 0 && dramaMovies.map((movie, index) => (
          <div key={index} className="flex">
            {/* {movie.title} */}
            <div>
              <img src={movie.backdrop_path ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` : sunImage} alt="" width={300} className="sm:rounded-m transition duration-500 ease-in-out hover:-translate-y-8 hover:scale-110  cursor-pointer" />
            </div>
          </div>
        ))
        }
      </div>
      <br></br>
      <br></br>

    </div>
  )
}

export default MovieList