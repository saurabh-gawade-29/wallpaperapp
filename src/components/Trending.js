import React from "react";
import { useEffect, useState } from "react";
import { serviceCallGet } from "../Helper/Service";
import Wallcard from "./Wallcard";
import { Link } from "react-router-dom";

let baseURL = `${process.env.REACT_APP_API_URL}?key=${process.env.REACT_APP_API_KEY}&image_type=photo&per_page=200&editors_choice=true`;

const Trending = () => {
  //! Use Effect
  const [wallpapers, setWallpapers] = useState([]);

  //! Functions
  const getWallpaper = async () => {
    debugger;
    let response = await serviceCallGet(baseURL);
    let beforeSorting = await response.data.hits;
    let afterSorting = beforeSorting.sort((a, b) => {
      return a.downloads - b.downloads;
    });
    let topTen = afterSorting.slice(0, 21);
    setWallpapers(topTen);
  };

  //! EntryPoint
  useEffect(() => {
    debugger;
    getWallpaper();
  }, []);
  return (
    <>
      <div className="block p-6 bg-gray-800 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-4">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
          Here You Get TOP 21 Editor's Choice Wallapers
        </h5>
        <p className="font-normal text-gray-400">
          There are numerous wallpaper apps available that offer beautiful and
          high-quality wallpapers. Here are some of the editors choice best:
        </p>
        <p className="font-normal text-gray-400">
          In summary, there are numerous good wallpaper apps available that
          offer beautiful and unique wallpapers across different themes.
          Choosing an app depends on the type of wallpapers you prefer - dark,
          minimal, Kawaii, stock, AMOLED, etc. Most apps are free
        </p>
        <Link to="/wallpaper" className="cursor-progress">
          <button className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mt-2">
            Search
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {wallpapers.map((element, i) => {
          return <Wallcard data={element} key={i} />;
        })}
      </div>
    </>
  );
};

export default Trending;
