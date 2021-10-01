import React from "react";
import { SliderData } from "./SliderData";

const ImageSlider = () => {
  return (
    <div>
      {SliderData.map((s, i) => {
        return <img src={s.image} alt={s.alt} />;
      })}
    </div>
  );
};

export default ImageSlider;
