import { useSelector } from 'react-redux'
import MovieList from './MovieList'
const SecondaryContainer = () => {
  const moviesData = useSelector((state)=>state.movies)
  return (
   <div className='bg-black'>
     <div className="relative z-10 bg-transparent -mt-32">
      <MovieList title ={"Now playing"} movies={moviesData?.nowPlayingMovies} />
       <MovieList title ={"Top Rated movies"} movies={moviesData?.topRatedMovies} />
      <MovieList title ={"Popular movies"} movies={moviesData?.popularMovies} />
      <MovieList title ={"UpComing movies"} movies={moviesData?.upComingMovies} />
     
    </div>
   </div>
  )
}

export default SecondaryContainer
