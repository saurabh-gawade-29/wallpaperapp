import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

const Trending = () => {
  //! Use Effect
  const [wallpapers, setWallpapers] = useState([]);
  //! Functions
  const getWallpaper = () => {
    debugger;
    axios
      .get(
        "https://pixabay.com/api/?key=40987026-d6665d5f7d2e023b7e3287980&image_type=photo"
      )
      .then((response) => {
        console.log(response, "Wallpapers");
        let beforeSorting = response.data.hits;
        let afterSorting = beforeSorting.sort((a, b) => {
          return b.downloads - a.downloads;
        });
        const top2Records = afterSorting.slice(0, 10);
        setWallpapers(top2Records);
      })
      .catch((error) => {
        console.log(error);
      });
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
