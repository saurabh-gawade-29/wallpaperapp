import React from "react";
import { useEffect, useState } from "react";
import { serviceCallGet } from "../Helper/Service";
import { encode } from "url-encode-decode";
import Videocard from "./Videocard";

const Videos = () => {
  //! States
  const [video, setVideo] = useState([]);
  const [searchwall, setSearchwall] = useState([]);
  const [safe, setSafe] = useState(false);
  const [myText, setMyText] = useState("");

  let baseURL = `${process.env.REACT_APP_API_URL}/videos/?key=${process.env.REACT_APP_API_KEY}&q=${myText}&per_page=20&safesearch=${safe}`;
  //! Search
  const handleURL = (e) => {
    debugger;
    e.preventDefault();
    let uri = encode(searchwall);
    setMyText(uri);
  };

  //! Service Call
  const getWallpaper = async () => {
    debugger;
    let response = await serviceCallGet(baseURL);

    if (response.data.hits.length === 0) {
      alert("No Data Found");
    } else {
      //   let res = await response.data.hits.slice(0, 20);
      setVideo(response.data.hits);
    }
  };

  //! Handle Safe Search
  const handleSelectChange = (event) => {
    let check = event.target.value;
    setSafe(check);
  };

  //! Use Effect
  useEffect(() => {
    debugger;
    getWallpaper();
  }, [myText, safe]);

  return (
    <div>
      <div className="searchWrap mb-4">
        <form>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              autoComplete="off"
              value={searchwall}
              onChange={(e) => setSearchwall(e.target.value)}
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Wallpapers..."
              required
            />
            <button
              onClick={(e) => handleURL(e)}
              className="text-white absolute end-2.5 bottom-2.5 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Search
            </button>
          </div>
        </form>
        <div className="dropDown my-4 flex justify-end">
          <select
            id="countries"
            className="p-2 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm text-center inline-flex items-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            value={safe}
            onChange={handleSelectChange}
          >
            <option value={false}>Safe Search Off</option>
            <option value={true}>Safe Search On</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {video.map((element, i) => {
          return <Videocard data={element} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Videos;
