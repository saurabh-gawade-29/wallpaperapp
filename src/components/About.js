import React from "react";

const About = () => {
  return (
    <>
      <div className="w-full p-4 text-start bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
          Educational Purpose
        </h5>
        <p className="mb-1 text-base text-gray-500 sm:text-lg dark:text-gray-400">
          Utilizing the Pixabay API, a wallpaper app
        </p>
        <p className="mb-1 text-base text-gray-500 sm:text-lg dark:text-gray-400">
          You can use and download these fantastic photos.
        </p>
      </div>
    </>
  );
};

export default About;
