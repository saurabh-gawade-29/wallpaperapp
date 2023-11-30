import React, { useState } from "react";
import { usePromiseTracker } from "react-promise-tracker";
import Loader from "react-spinners/RotateLoader";

const GLoader = (props) => {
  const { promiseInProgress } = usePromiseTracker();
  const [color] = useState("#1f2937");
  return (
    <div>
      {promiseInProgress === true ? (
        <>
          <div className="myLoaderBackground">
            <Loader
              className="myLoader"
              color={color}
              loading={promiseInProgress}
              size={15}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default GLoader;
