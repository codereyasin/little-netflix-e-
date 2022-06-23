import { AiFillStar } from "react-icons/ai";

function MovieCrad({ medium_cover_image, title_long, year, rating, onClick }) {
  return (
    <div onClick={onClick} className="md:w-44 w-36 mb-4 mx-auto bg-slate-800 p-3 rounded-md hover:-translate-y-2 transition-all duration-100">
      <img
        className="rounded-md"
        src={medium_cover_image}
        loading="lazy"
        alt=""
      />
      <div className="mt-2">
        <h1 className="text-gray-100 truncate text-lg font-medium" title={title_long}>{title_long}</h1>
        <div className="flex items-center space-x-6">
          <div className="border border-orange-400 text-orange-400 flex items-center w-fit p-1 rounded-md text-xs space-x-1 mt-1">
            <AiFillStar size={19} />
            <span>{rating}</span>
          </div>
          <div>
            <span className="text-xs text-gray-500">{year}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCrad;
