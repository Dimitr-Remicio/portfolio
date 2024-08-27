import "../../features/colors.scss";
import PropTypes from "prop-types";

import sprite from "../../features/sprite.svg";

import style from "../../features/toogle.module.scss";
import "./arrow.scss";
import { motion } from "framer-motion";

function Dark() {
  return (
    <>
      <div className="header-right">
        <div className={`Dark`} id="Darkbutton"></div>
        <div className="navcont">
          <a className="icosn" href="#Home">
              <h4 className="tagname">Home</h4>
            <motion.div className="effectItem">
              <svg
                className={style.iconX}
                viewBox="0 0 32 32"
                width="30px"
                height="30px"
              >
                <use className="headericon" href={sprite + "#IconX"}></use>
              </svg>
            </motion.div>
          </a>
          <a className="icosn" href="#Projects">
              <h4 className="tagname">Projects</h4>
            <motion.div className="effectItem">
              <svg
                className={style.iconX}
                viewBox="0 0 32 32"
                width="30px"
                height="30px"
              >
                <use className="headericon" href={sprite + "#IconX"}></use>
              </svg>
            </motion.div>
          </a>
          <a className="icosn" href="#About">
              <h4 className="tagname">About</h4>
            <motion.div className="effectItem">
              <svg
                className={style.iconX}
                viewBox="0 0 32 32"
                width="30px"
                height="30px"
              >
                <use className="headericon" href={sprite + "#IconX"}></use>
              </svg>
            </motion.div>
          </a>
          <a className="icosn" href="#contact">
              <h4 className="tagname">Contact</h4>
            <motion.div className="effectItem">
              <svg
                className={style.iconX}
                viewBox="0 0 32 32"
                width="30px"
                height="30px"
              >
                <use className="headericon" href={sprite + "#IconX"}></use>
              </svg>
            </motion.div>
          </a>
        </div>
        <div className="content_header">
          {/* <p style={{ color: "white" }}>g</p> */}
        </div>
      </div>
      {/* 
      <div className="header-top">
        <div className={`Dark `} id="Darkbutton">
          <div style={style}>
            
          </div>
        </div>
        <div className="content_header-top"></div>
      </div> */}
    </>
  );
}

Dark.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default Dark;
