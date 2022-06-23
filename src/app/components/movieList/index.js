import { useEffect, useState } from "react";
import MovieCrad from "./moviecrad";
import Spinner from "react-spinkit";
import Carousel from "react-multi-carousel";
import { BsFillStarFill } from "react-icons/bs";
import "react-multi-carousel/lib/styles.css";
import { GrFormClose } from "react-icons/gr";
import { AiFillStar } from 'react-icons/ai';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1920 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1920, min: 900 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 900, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

function MovieList({
  title,
  filter,
  carousel = false,
  duration = 500,
  speed = 1000,
}) {
  const [movies, setMovies] = useState([]);
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  const getMovies = async () => {
    setLoading(true);
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?${filter}`
    ).then((res) => res.json());

    setTimeout(() => {
      setMovies(response?.data?.movies);
      setLoading(false);
    }, 2000);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(details);
  return (
    <div className="my-12">
      <h1 className="text-gray-100 text-3xl md:mx-5 sm:mx-2 font-mediu pb-2">
        {title}
      </h1>
      {loading && (
        <div className="flex justify-center py-5">
          <Spinner name="line-scale-pulse-out-rapid" color="red" />
        </div>
      )}
      {movies.length > 0 && (
        <>
          {carousel ? (
            <div className="my-7">
              <Carousel
                swipeable={true}
                loop
                responsive={responsive}
                autoPlay={true}
                infinite={true}
                autoPlaySpeed={speed}
                keyBoardControl={true}
                transitionDuration={duration}
              >
                {movies?.map((movie) => (
                  <MovieCrad
                    onClick={() => setDetails(movie)}
                    {...movie}
                    key={movie?.id}
                  />
                ))}
              </Carousel>
            </div>
          ) : (
            <div className=" flex items-start flex-wrap ">
              {movies?.map((movie) => (
                <MovieCrad
                  onClick={() => setDetails(movie)}
                  {...movie}
                  key={movie?.id}
                />
              ))}
            </div>
          )}
        </>
      )}
      {details && (
        <div
          onClick={() => setDetails(null)}
          className="fixed w-screen bg-black bg-opacity-50 h-screen top-0 left-0 z-[9999]"
        >
          <span className="text-white " onClick={() => setDetails(null)}>
            <h1 className=" font-bold">Close <span className="font-bold">❌</span></h1>
          </span>
          <div className="flex flex-col justify-center mx-auto items-center h-screen pr-100 w-[20%]">
            <img
              className="rounded-lg border"
              src={details?.large_cover_image}
              alt=""
            />
            <div className="pt-3 text-yellow-300 mb-2 font-bold items-center justify-center text-center ">
              {details.title}
            </div>

            <div className="text-yellow-400 mb-2 items-center flex justify-center gap-1 font-semibold">
            Rating: {details?.rating}<AiFillStar />
            </div>
            <div className=" cursor-pointer text-white font-bold border-2 p-2 mb-2 rounded-lg bg-red-400">
              Summary 
            </div>
            <div className="text-gray-200 font-semibold items-center flex justify-center font-[50px] lg:w-[600px] w-[450px] ">
              {details?.summary}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieList;
