import React, { useState } from "react";
import downloadImg from "../Assets/img/downloads.png";
import viewImg from "../Assets/img/view.png";

const Wallcard = ({ data }) => {
  debugger;
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(!modal);
  };
  const openInNewTab = (url) => {
    debugger;
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div>
      <div className="relative eyeParent">
        <img
          className="h-auto max-w-full rounded-lg w-full h-80 object-cover imagePreview"
          src={data.webformatURL}
          alt=""
        />
        <div className="absolute top-2 eyeIcon w-full">
          <div className="wrapImg flex justify-start">
            <figcaption className="bg-zinc-50 flex items-center space-x-3 p-2 mx-2 rounded-lg">
              <img
                src={data.userImageURL}
                alt=""
                className="flex-none w-12 h-12 rounded-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="flex-auto">
                <div className="text-sm text-black-900 font-semibold dark:text-black-300">
                  <span className="absolute inset-0 text-xs"></span>
                  {data.user}
                </div>
                <div className="mt-0.5 truncate text-xs">
                  User Id: {data.user_id}
                </div>
              </div>
            </figcaption>
          </div>
        </div>
        <div className="absolute bottom-2 eyeIcon w-full">
          <div className="wrapButton flex justify-end">
            <button
              className="bg-zinc-50 mx-1 block focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-3 py-3 text-center w-12 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              data-modal-target="default-modal"
              data-modal-toggle="default-modal"
              onClick={() => openInNewTab(data.largeImageURL)}
            >
              <img src={downloadImg} alt="" />
            </button>
            <button
              className="bg-zinc-50 mx-1 block focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-3 py-3 text-center w-12 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              data-modal-target="default-modal"
              data-modal-toggle="default-modal"
              onClick={openModal}
            >
              <img src={viewImg} alt="" />
            </button>
          </div>
        </div>
      </div>
      <div
        style={{ display: modal && "flex" }}
        id="default-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative bg-gray-700 rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Free for use under the Pixabay Content License
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

            <div className="p-4 md:p-5 space-y-4 bg-white">
              <img
                className="h-auto max-w-full rounded-lg w-full h-80 object-contain imagePreview"
                src={data.webformatURL}
                alt=""
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
              <div className="p-2 md:p-5 lg:p-5 space-y-4">
                <figcaption className="flex bg-gray-900 space-x-3 p-2 mx-2 rounded-lg">
                  <img
                    src={data.userImageURL}
                    alt=""
                    className="flex-none w-16 h-16 rounded-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="text-sm text-white">
                    <div className="truncate font-semibold">
                      <span>{data.user}</span>
                    </div>
                    <div className="truncate text-xs">
                      <span>{data.user_id}</span>
                    </div>
                  </div>
                </figcaption>
              </div>
              <div className="p-2 md:p-5 lg:p-5 space-y-4">
                <p className="leading-relaxed text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Image Width: </span>
                  <span className="text-white">{data.imageWidth}</span>
                </p>
                <p className="leading-relaxed text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">image Height: </span>
                  <span className="text-white">{data.imageHeight}</span>
                </p>

                <p className="leading-relaxed text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Image Size: </span>
                  <span className="text-white">{data.imageSize}</span>
                </p>

                <p className="leading-relaxed text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Downloads: </span>
                  <span className="text-white">{data.downloads}</span>
                </p>
                <p className="leading-relaxed text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Likes: </span>
                  <span className="text-white">{data.likes}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                data-modal-hide="default-modal"
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => openInNewTab(data.largeImageURL)}
              >
                Download
              </button>
              <button
                data-modal-hide="default-modal"
                onClick={openModal}
                className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallcard;
