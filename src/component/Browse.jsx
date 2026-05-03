import useNowPlayingMovies from "../hook/useNowPlayingMovies";
import usePopularMovies from "../hook/usePopularMovies";
import useTopRatedMovies from "../hook/useTopRatedMovies";
import useUpComingMovies from "../hook/useUpComingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer/>
    </div>
  );
};

export default Browse;
