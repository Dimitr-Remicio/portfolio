import React from "react";
import s from "./Home.module.scss";


const Arrow = () => {
  return (
    <div className={s.contArr}>
      <div className={s.arrowDown}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Arrow;
