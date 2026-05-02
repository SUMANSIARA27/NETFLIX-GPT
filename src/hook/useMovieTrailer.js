import { useDispatch, useSelector } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addVideoTailer } from "../utils/movieSlice";
import { useEffect } from "react";


const useMovieTrailer = ({movieId}) => {
   const dispatch = useDispatch();
  const trailerVideo = useSelector((state)=>state.movies?.videoTailer);
  const getMoviesVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTION,
    );
    const json = await data.json();
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addVideoTailer(trailer));
  };
  useEffect(() => {
    getMoviesVideos();
  }, []);

  return {
    trailerVideo
  }
}

export default useMovieTrailer
