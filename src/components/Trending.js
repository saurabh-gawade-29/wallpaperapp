import React from "react";
import { useEffect, useState } from "react";
import { serviceCallGet } from "../Helper/Service";
import Wallcard from "./Wallcard";

let baseURL = `${process.env.REACT_APP_API_URL}?key=${process.env.REACT_APP_API_KEY}&image_type=photo&per_page=200&safesearch=false&editors_choice=true`;

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
          high-quality wallpapers. Here are some of the editors choice best
          wallpaper apps:
        </p>
        <p className="font-normal text-gray-400">
          In summary, there are numerous good wallpaper apps available that
          offer beautiful and unique wallpapers across different themes.
          Choosing an app depends on the type of wallpapers you prefer - dark,
          minimal, Kawaii, stock, AMOLED, etc. Most apps are free
        </p>
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
