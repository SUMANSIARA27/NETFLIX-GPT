import useNowPlayingMovies from "../hook/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div className="overflow-hidden w-screen aspect-video">
      <Header />
      <MainContainer />

      {/* 

  section 1 //  
   -- main container 
    - video playing background 
    - title & description 

   section 2 //  
  -- Secondary container 
     -- movie list * n 
      -- card * n
  

       */}
    </div>
  );
};

export default Browse;
