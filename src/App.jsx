import { useState } from "react";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmarks = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  const handleReadingTime = (time, id) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);

    {
      const removeBookmark = bookmarks.filter((bookmark) => bookmark.id !== id);
      setBookmarks(removeBookmark);
    }
  };
  return (
    <>
      <Header></Header>
      <div className="md:flex gap-10  max-w-6xl mx-auto">
        <Blogs
          handleReadingTime={handleReadingTime}
          handleAddToBookmarks={handleAddToBookmarks}
        ></Blogs>
        <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  );
}

export default App;
