import { FaStar, FaRegEye } from "react-icons/fa";
import moment from "moment";
import { GiRapidshareArrow } from "react-icons/gi";
import { IoBookmarksSharp } from "react-icons/io5";

const NewsCard = ({ news }) => {
  const {
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
    tags,
  } = news;

  return (
    <div className="card bg-base-100 shadow-xl mb-3">
      <div className="card-body ">
        {/* Author Info */}
        <div className="flex items-center justify-between mb-4 bg-base-200 p-2">
          <div className="flex items-center gap-3">
            <img
              src={author.img}
              alt={author.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h2 className="font-semibold">{author.name}</h2>
              <p className="text-sm text-gray-500">
                {moment(author.published_date).format("YYYY-MM-DD")}
              </p>
            </div>
          </div>
          <div className="text-xl text-gray-400 cursor-pointer flex gap-1">
          <IoBookmarksSharp />
            <GiRapidshareArrow />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-lg font-bold mb-2">{title}</h2>

        {/* Image */}
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-52 object-cover rounded-lg mb-4"
        />

        {/* Details Preview */}
        <p className="text-gray-700 text-sm mb-2">
          {details.slice(0, 200)}...
          <span className="text-orange-500 font-semibold cursor-pointer ml-1">
            Read More
          </span>
        </p>

        {/* Tags */}
        <div className="text-xs text-gray-500 mb-2">
          Tags: {tags.map((tag) => (
            <span key={tag} className="mr-1">#{tag}</span>
          ))}
        </div>

        {/* Footer: Rating & Views */}
        <div className="flex items-center justify-between mt-2 text-sm">
          <div className="flex items-center gap-1 text-orange-500">
            {[...Array(rating.number)].map((_, i) => (
              <FaStar key={i} />
            ))}
            <span className="ml-1 text-black">{rating.number}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            <FaRegEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
