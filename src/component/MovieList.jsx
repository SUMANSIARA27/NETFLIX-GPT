import MovieCard from "./MovieCard";

const MovieList = ({ movies, title }) => {
  return (
    <>
      <h1 className="text-white text-2xl font-bold p-6">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="px-6 flex">
          {movies?.map((movie) => (
            <MovieCard key={movie?.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieList;
