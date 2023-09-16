import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({ handleAddToBookmarks, handleReadingTime }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const url = "blogs.json";
        const res = await fetch(url);
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBlogData();
  }, []);

  return (
    <div className="w-2/3 mt-10">
      {blogs.map((blogsData, index) => (
        <Blog
          handleAddToBookmarks={handleAddToBookmarks}
          blog={blogsData}
          key={index}
          handleReadingTime={handleReadingTime}
        ></Blog>
      ))}
    </div>
  );
};

Blogs.propTypes = {
  handleAddToBookmarks: PropTypes.func.isRequired,
  handleReadingTime: PropTypes.func.isRequired,
};
export default Blogs;
