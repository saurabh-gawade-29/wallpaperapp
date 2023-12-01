import React from "react";
import { useEffect, useState } from "react";
import { serviceCallGet } from "../Helper/Service";
import Wallcard from "./Wallcard";

let baseURL = `${process.env.REACT_APP_API_URL}?key=${process.env.REACT_APP_API_KEY}&image_type=photo&per_page=200&safesearch=true`;
const Wallpaper = () => {
  //! Use Effect
  const [wallpapers, setWallpapers] = useState([]);
  const getWallpaper = async () => {
    let response = await serviceCallGet(baseURL);
    setWallpapers(response.data.hits);
  };

  useEffect(() => {
    debugger;
    getWallpaper();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {wallpapers.map((element, i) => {
          return <Wallcard data={element} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Wallpaper;
