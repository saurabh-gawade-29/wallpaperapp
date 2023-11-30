import React from "react";
import { useEffect, useState } from "react";
import { serviceCallGet } from "../Helper/Service";

let baseURL = `${process.env.REACT_APP_API_URL}?key=${process.env.REACT_APP_API_KEY}&image_type=photo&per_page=200&safesearch=false`;

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
    let topTen = afterSorting.slice(0, 10);
    setWallpapers(topTen);
  };
  //! EntryPoint
  useEffect(() => {
    debugger;
    getWallpaper();
  }, []);
  return (
    <>
      <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 my-4">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Here You Get TOP 10 The Trending Wallapers
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the Best wallpaper Website of 2050 so far, in reverse
          chronological order.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {wallpapers.map((element, i) => {
          return (
            <div key={i}>
              <img
                className="h-auto max-w-full rounded-lg w-full h-full object-fill"
                src={element.webformatURL}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Trending;
