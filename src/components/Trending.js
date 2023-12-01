import React from "react";
import { useEffect, useState } from "react";
import { serviceCallGet } from "../Helper/Service";
import downloadImg from "../Assets/img/downloads.png";
import viewImg from "../Assets/img/view.png";

let baseURL = `${process.env.REACT_APP_API_URL}?key=${process.env.REACT_APP_API_KEY}&image_type=photo&per_page=200&safesearch=false&safesearch=true`;

const Trending = () => {
  //! Use Effect
  const [wallpapers, setWallpapers] = useState([]);
  const [modal, setModal] = useState(false);
  //! Functions
  const getWallpaper = async () => {
    debugger;
    let response = await serviceCallGet(baseURL);
    let beforeSorting = await response.data.hits;
    let afterSorting = beforeSorting.sort((a, b) => {
      return a.downloads - b.downloads;
    });
    let topTen = afterSorting.slice(0, 12);
    setWallpapers(topTen);
  };

  const openModal = () => {
    setModal(!modal);
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
          Here You Get TOP 12 Trending Wallapers
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the Best wallpaper Website of 2050 so far, in reverse
          chronological order.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {wallpapers.map((element, i) => {
          return (
            <div key={i} className="relative eyeParent">
              <img
                className="h-auto max-w-full rounded-lg w-full h-full object-cover"
                src={element.webformatURL}
                alt=""
              />
              <div className="absolute top-2 eyeIcon w-full">
                <div className="wrapImg flex justify-start">
                  <figcaption class="bg-zinc-50 flex items-center space-x-4 p-2 mx-2 rounded-lg">
                    <img
                      src={element.userImageURL}
                      alt=""
                      class="flex-none w-14 h-14 rounded-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <div class="flex-auto">
                      <div class="text-base text-black-900 font-semibold dark:text-black-300">
                        <span class="absolute inset-0"></span>
                        {element.user}
                      </div>
                      <div class="mt-0.5">User Id: {element.user_id}</div>
                    </div>
                  </figcaption>
                </div>
              </div>
              <div className="absolute bottom-2 eyeIcon w-full">
                <div className="wrapImg flex justify-end">
                  <button
                    className="bg-zinc-50 mx-1 block focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center w-16 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                    data-modal-target="default-modal"
                    data-modal-toggle="default-modal"
                  >
                    <img src={downloadImg} alt="" />
                  </button>
                  <button
                    className="bg-zinc-50 mx-1 block focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center w-16 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                    data-modal-target="default-modal"
                    data-modal-toggle="default-modal"
                    onClick={openModal}
                  >
                    <img src={viewImg} alt="" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div
        style={{ display: modal && "flex" }}
        id="default-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Terms of Service
              </h3>
              <button
                onClick={openModal}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="default-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="p-4 md:p-5 space-y-4">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts
                new consumer privacy laws for its citizens, companies around the
                world are updating their terms of service agreements to comply.
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation
                (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                common set of data rights in the European Union. It requires
                organizations to notify users as soon as possible of high-risk
                data breaches that could personally affect them.
              </p>
            </div>

            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                data-modal-hide="default-modal"
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                I accept
              </button>
              <button
                data-modal-hide="default-modal"
                onClick={openModal}
                className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trending;
