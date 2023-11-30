import React from "react";

const About = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-col-1 md:grid-cols-2 gap-2">
        <div className="w-full p-4 text-start bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mb-2">
          <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
            Welcome to Wallpaper App
          </h5>
          <p className="mb-1 text-base text-gray-500 sm:text-lg dark:text-gray-400">
            At Wallpaper, we believe in the power of visual expression. Our
            passion for art and design led us to create a space where you can
            discover, explore, and download stunning wallpapers that resonate
            with your style and personality.
          </p>
        </div>
        <div className="w-full p-4 text-start bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mb-2">
          <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
            Our Vision
          </h5>
          <p className="mb-1 text-base text-gray-500 sm:text-lg dark:text-gray-400">
            We envision a world where every digital space is a canvas for
            self-expression. Through an extensive collection of high-quality
            wallpapers, we aim to transform your devices into personalized works
            of art. Whether you're seeking tranquility with nature-inspired
            scenes, a burst of creativity with abstract designs, or a touch of
            nostalgia with vintage aesthetics, we have something for everyone.
          </p>
        </div>
        <div className="w-full p-4 text-start bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mb-2">
          <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
            What Sets Us Apart
          </h5>
          <p className="mb-1 text-base text-gray-500 sm:text-lg dark:text-gray-400">
            Curated Collections: Our team of design enthusiasts curates diverse
            collections to cater to a variety of tastes and preferences.
            High-Quality Imagery: We prioritize quality, ensuring that each
            wallpaper is not only visually appealing but also optimized for
            various screen resolutions. User-Friendly Experience: Navigating our
            website is a seamless experience. Discover and download wallpapers
            effortlessly with our user-friendly interface.
          </p>
        </div>
        <div className="w-full p-4 text-start bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mb-2">
          <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
            Our Commitment
          </h5>
          <p className="mb-1 text-base text-gray-500 sm:text-lg dark:text-gray-400">
            We are committed to continuously expanding our collection, staying
            on top of design trends, and providing a platform where artists and
            creators can showcase their talent. Your satisfaction is our
            priority, and we're dedicated to delivering a delightful wallpaper
            experience.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
