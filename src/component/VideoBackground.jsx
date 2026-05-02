import useMovieTrailer from "../hook/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const { trailerVideo } = useMovieTrailer({ movieId });
  return (
    <div className="overflow-hidden w-screen">
      <iframe
        className="w-screen aspect-video overflow-hidden"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo?.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
