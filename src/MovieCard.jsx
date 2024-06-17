

const MovieCard = ({movie}) => {
  return (
    <>
      <div className="movie w-80 h-[460px] m-6 relative rounded-xl overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0,1)] shadow-md hover:shadow-lg hover:scale-105">
        

        <div className="relative w-full h-full transition-opacity duration-400 ease-[cubic-bezier(0.175,0.885,0,1)]">
          <img
            className="w-full h-full object-cover"
            src={
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://via.placeholder.com/400"
            }
            alt={movie.Title}
          />
        </div>

        <div className="absolute bottom-0 right-0 left-0 p-6 bg-gray-700 transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0,1)]">
          <span className="font-raleway uppercase text-xs tracking-wider font-medium text-gray-200">
            {movie.Type}
          </span>
          <h3 className="mt-1 text-orange-300">{movie.Title}</h3>
          <h3 className="mt-1 text-orange-100">Year: {movie.Year}</h3>
        </div>
      </div>
    </>
  );
};

export default MovieCard;