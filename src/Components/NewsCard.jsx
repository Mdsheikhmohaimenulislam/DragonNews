
import { CiBookmark } from "react-icons/ci";
import { FaStar, FaEye } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { Link } from "react-router";


const NewsCard = ({ categorie }) => {



  const {
    title,
    rating,
    total_view,
    author,
    id,
    thumbnail_url,
    details,
  } = categorie;

  return (
    <div className="card bg-base-100 shadow-md  rounded-xl">
      {/* Author */}
      <div className="flex items-center justify-between bg-base-200 p-5  mb-4">
        <div className="flex items-center  gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold text-sm">{author.name}</h2>
            <p className="text-xs text-gray-500">
              {new Date(author.published_date).toDateString()}
            </p>
          </div>
        </div>
        <div className="text-right text-gray-400 flex space-x-2">
          <CiBookmark size={23} />
          <IoShareSocialOutline size={23} />
        </div>
      </div>

      <div className="p-5">
        {/* Title */}
        <h2 className="text-lg font-bold mb-2">{title}</h2>

        {/* Thumbnail */}
        <figure className="mb-4">
          <img
            src={thumbnail_url}
            alt={title}
            className="rounded-xl w-full max-h-52 object-cover"
          />
        </figure>

        {/* Details */}
        <p className="text-sm text-gray-600 mb-3">
          {details.length > 150 ? `${details.slice(0, 150)}...` : details}
          <Link to={
          `/news/${id}` 
          } className="text-primary ml-1 cursor-pointer">Read More</Link>
        </p>

        <hr className="mt-5 mb-5 text-base-300" />
        {/* Footer */}
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center gap-1 text-orange-500">
            {Array(rating.number)
              .fill()
              .map((currentValue, index) => (
                <FaStar key={index} />
              ))}
            <span className="text-gray-700 font-semibold ml-1">
              {rating.number}
            </span>
          </div>

          <div className="flex items-center gap-1 text-gray-600">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
