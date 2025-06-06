import BlogsData from './BlogsData.json';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";


const Sidebar = () => {
  const [popularBlogs, setPopularBlogs] = useState([]);

  useEffect(() => {
    setPopularBlogs(BlogsData.slice(0, 15));
  }, []);
  

  return (
    <div>
      <div>
        <h3 className="text-2xl font-semibold px-4"> Latest Blogs</h3>
        <div>
          {popularBlogs.slice(0, 5).map((blog) => (
            <div
              key={blog.id}
              className="my-5 border-b-2 border-spacing-2 px-4"
            >
              <h4 className="font-medium mb-2">{blog.title}</h4>
              <Link
                to={`/blog/${blog.id}`}
                className="text-basepb-2 hover:text-pink-500 inline-flex items-center py-1"
              >
                Read more
                <FaArrowRight className="mt-1 ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
          {/* popular blogs */}
      <div>
        <h3 className="text-2xl font-semibold px-4 mt-20"> Popular Blogs</h3>
        <div>
          {popularBlogs.slice(6, 10).map((blog) => (
            <div
              key={blog.id}
              className="my-5 border-b-2 border-spacing-2 px-4"
            >
              <h4 className="font-medium mb-2">{blog.title}</h4>
              <Link
                to={`/blog/${blog.id}`}
                className="text-basepb-2 hover:text-pink-500 inline-flex items-center py-1"
              >
                Read more
                <FaArrowRight className="mt-1 ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Sidebar;
