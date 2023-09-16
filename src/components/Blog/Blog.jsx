import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmarks, handleReadingTime }) => {
  const {
    title,
    cover,
    author,
    author_img,
    reading_time,
    posted_date,
    hashtags,
    id,
  } = blog;
  return (
    <div className="mb-20">
      <img
        className="w-full rounded-md"
        src={cover}
        alt={`cover picture of the title ${title}`}
      />

      <div className="flex justify-between mt-4">
        <div className="flex gap-3 items-center">
          <img className="w-11" src={author_img} alt={`author-image`} />
          <div>
            <h2 className="text-xl">{author}</h2>
            <p className="text-lg">{posted_date}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div>
            <span>{reading_time}</span>min read
          </div>

          <button
            onClick={() => handleAddToBookmarks(blog)}
            className="text-2xl text-red-600"
          >
            {/* save icon */}
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>

      <h2 className="my-2 text-3xl">{title}</h2>
      <p>
        {hashtags.map((hash, index) => (
          <span className="mr-2 mb-3" key={index}>
            <a href="#">#{hash}</a>
          </span>
        ))}
      </p>

      <button
        onClick={() => handleReadingTime(reading_time, id)}
        className="underline Mark As Read font-bold mt-2 text-purple-800 "
      >
        Mark As Read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmarks: PropTypes.func.isRequired,
  handleReadingTime: PropTypes.func.isRequired,
};
export default Blog;
