import PropTypes from "prop-types";
import Bookmark from "./Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="w-1/3 mt-10 bg-slate-200 text-center rounded-md">
      <div className="text-justify w-9/12 mx-auto mt-4">
        <h1 className="mb-2">
          <span className="text-3xl  underline ">Reading Time</span>
          <span className="text-3xl mr-1 ml-1   ">:</span>
          <span className="bg-red-400 text-2xl  rounded-full w-9 h-9 px-2  ">
            {readingTime}
          </span>
        </h1>
        <h2>
          <span className="text-3xl  underline ">Bookmarks</span>
          <span className="text-3xl mr-1 ml-1   ">:</span>
          <span className="bg-red-400 text-2xl  rounded-full w-9 h-9 px-2  ">
            {bookmarks.length}
          </span>
        </h2>
      </div>{" "}
      {bookmarks.map((bookmark, index) => (
        <Bookmark key={index} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number.isRequired,
};
export default Bookmarks;
