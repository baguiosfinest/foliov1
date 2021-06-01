import React from 'react';
import "./loader.scss";
import { colorArr } from "../../../../../js/colors.js";

export default function Loader() {
  return (
    <div className="loader">
      {[...Array(9)].map((x, i) =>
        <div key={i} style={{backgroundColor: colorArr[i][1][600]}} />
      )}
    </div>
  )
}
