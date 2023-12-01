import React from "react";
import { useEffect, useState } from "react";
import { serviceCallGet } from "../Helper/Service";

let baseURL = `${process.env.REACT_APP_API_URL}?key=${process.env.REACT_APP_API_KEY}&image_type=photo&per_page=200&safesearch=false`;
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
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-4">
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
    </div>
  );
};

export default Wallpaper;
