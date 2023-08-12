import '../../features/colors.scss';
import PropTypes from 'prop-types';

import sprite from '../../features/sprite.svg'

import style from '../../features/toogle.module.scss'
import './arrow.scss';


function Dark() {
  
  return (
    <>
      <div className="header-right">
        <div className={`Dark`} id="Darkbutton">
          <div style={style}>
          </div>
        </div>
          <div className="navcont">
            <a href="#Home">
              <svg className={style.iconX} viewBox="0 0 32 32" width="30px" height="30px">
                <use className='headericon' href={sprite + "#IconX"}>
                </use>
              </svg>
            </a>
            <a href="#Projects">
              <svg className={style.iconX} viewBox="0 0 32 32" width="30px" height="30px">
                <use className='headericon' href={sprite + "#IconX"}>
                </use>
              </svg>
            </a>
            <a href="">
              <svg className={style.iconX} viewBox="0 0 32 32" width="30px" height="30px">
                <use className='headericon' href={sprite + "#IconX"}>
                </use>
              </svg>
            </a>
            <a href="">
              <svg className={style.iconX} viewBox="0 0 32 32" width="30px" height="30px">
                <use className='headericon'  href={sprite + "#IconX"}>
                </use>
              </svg>
            </a>

          </div>
        <div className="content_header">
          <p style={{color:'white'}}>g</p>
        </div>
        
      </div>

      <div className="header-top">
        <div className={`Dark `} id="Darkbutton">
          <div style={style}>
            <input
              type="checkbox"
              className={style.checkbox}
              id="chk"
            />
            <label className={style.label} htmlFor="chk">
              <div className={style.ball}></div>
            </label>
          </div>
        </div>
        <div className="content_header-top"></div>
      </div>
    </>
  );
}

Dark.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default Dark;
