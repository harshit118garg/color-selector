import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setalert] = useState(false);

  const bg = rgb.join(",");
  const hexValue = `#${hexColor}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setalert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <>
      <div
        className={`box ${index > 10 && "color-light"}`}
        style={{ backgroundColor: `rgb(${bg})` }}
        onClick={() => {
          setalert(true);
          navigator.clipboard.writeText(hexValue);
        }}
      >
        <p>{`weight: ${weight}%`}</p>
        <p>{hexValue}</p>
        {alert && <p className="alert">copied to clipboard</p>}
      </div>
    </>
  );
};

export default SingleColor;
