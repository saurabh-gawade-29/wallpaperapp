import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

const Wallpaper = () => {
  //! Use Effect
  const [wallpapers, setWallpapers] = useState([]);
  const getWallpaper = () => {
    axios
      .get(
        "https://pixabay.com/api/?key=40987026-d6665d5f7d2e023b7e3287980&image_type=photo"
      )
      .then((response) => {
        console.log(response, "Wallpapers");
        setWallpapers(response.data.hits);
      })
      .catch((error) => {
        console.log(error);
      });
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
