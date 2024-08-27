import React, { Component } from "react";
import s from "./Head.module.scss";

import sprite from "/src/features/sprite.svg";

const Head = () => {
  return (
    <>
      {/* <div className={s.header}> */}
          <svg className={s.DRico}>
            <use href={sprite + "#ICOn"}></use>
          </svg>
          
          
        {/* </div> */}
      {/* </div> */}
    </>
  );
};

export default Head;
