import s from "./Skills.module.scss";
import sprite from "../../features/sprite.svg";

const Skills = () => {
  return (
    <div className={s.Info}>
      <h2>my Skills</h2>
      <div className={s.Skillscont}>
        <h4>Progammign</h4>
        <li className={s.list}>
          <div>
            <svg className={s.iconhtml}
            viewBox="0 0 32 32" width="80">
              <use href={sprite + "#icon-html"}></use>
            </svg>
          </div>
          <div>
            <svg className={s.iconhtml}
            viewBox="0 0 32 35" width="80">
              <use href={sprite + "#icon-css"}></use>
            </svg>
          </div>
          <div>
            <svg className={s.iconhtml}
            viewBox="0 0 32 35" width="80">
              <use href={sprite + "#icon-javascript"}></use>
            </svg>
          </div>
          <div>
            <svg className={s.iconhtml}
            viewBox="0 0 32 35" width="80">
              <use href={sprite + "#icon-react"}></use>
            </svg>
          </div>
          <div>
            <svg className={s.iconhtml}
            viewBox="0 0 32 35" width="80">
              <use href={sprite + "#icon-node"}></use>
            </svg>
          </div>
        </li>
        <br />
        <h4>Tools</h4>
        <li className={s.list}>
        <div>
            <svg className={s.iconhtml}
            viewBox="0 0 32 35" width="80">
              <use href={sprite + "#icon-git"}></use>
            </svg>
          </div>
          <div>
            <svg className={s.iconhtml}
            viewBox="0 0 32 35" width="80">
              <use href={sprite + "#icon-github"}></use>
            </svg>
          </div>
          <div>
            <svg className={s.iconhtml}
            viewBox="0 0 32 35" width="80">
              <use href={sprite + "#icon-vscode"}></use>
            </svg>
          </div>
          <div>
            <svg className={s.iconhtml}
            viewBox="0 0 32 35" width="80">
              <use href={sprite + "#icon-sass"}></use>
            </svg>
          </div>
          <div>
            <svg className={s.iconhtml}
            viewBox="0 0 32 35" width="80">
              <use href={sprite + "#icon-bootstrap"}></use>
            </svg>
          </div>
          
          <div>
            <svg className={s.iconhtml}
            viewBox="0 0 32 35" width="80">
              <use href={sprite + "#icon-mongodb"}></use>
            </svg>
          </div>
         
        </li>
        <h4>Other's Skills</h4>
        <li className={s.list}>
          <div>
            <svg className={s.iconhtml}
            viewBox="0 0 32 35" width="80">
              <use href={sprite + "#icon-adobeil"}></use>
            </svg>
          </div>
          <div>
            <svg className={s.iconhtml}
            viewBox="0 0 32 35" width="80">
              <use href={sprite + "#icon-adobeli"}></use>
            </svg>
          </div>
          <div>
            <svg className={s.iconhtml}
            viewBox="0 0 32 35" width="80">
              <use href={sprite + "#icon-adobepho"}></use>
            </svg>
          </div>
          <div>
            <svg className={s.iconhtml}
            viewBox="0 0 32 35" width="80">
              <use href={sprite + "#icon-figma"}></use>
            </svg>
          </div>
        </li>
      </div>
    </div>
  );
};

export default Skills;
