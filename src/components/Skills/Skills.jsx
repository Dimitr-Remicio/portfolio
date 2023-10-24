import s from "./Skills.module.scss";
import sprite from "../../features/sprite.svg";

const Skills = () => {
  return (
    <>
      <h2>my Skills</h2>
      <div className={s.Info}>
        <div className={s.Skillscont}>
          <div className={s.separator}>
            <div className={s.nameTag}> 
              <p>Progammign</p>
            </div>
            <svg className="icon icon-line-tag">
              <use xlinkHref={sprite + "#icon-linetag"}></use>
            </svg>
          </div>

          <li className={s.grid}>
            <div className={s.box} id="html">
              <svg className={s.iconhtml} viewBox="0 0 32 32" width="30">
                <use href={sprite + "#icon-html"}></use>
              </svg>
              HTML
            </div>
            <div className={s.box} id="css">
              <svg className={s.iconhtml} viewBox="0 0 32 32" width="30">
                <use href={sprite + "#icon-css"}></use>
              </svg>
              CSS
            </div>
            <div className={s.box} id="javascript">
              <svg className={s.iconhtml} viewBox="0 0 32 32" width="30">
                <use href={sprite + "#icon-javascript"}></use>
              </svg>
              JAVASCRIPT
            </div>
            <div className={s.box} id="react">
              <svg className={s.iconhtml} viewBox="0 0 32 32" width="30">
                <use href={sprite + "#icon-react"}></use>
              </svg>
              REACT
            </div>
            <div className={s.box} id="node">
              <svg className={s.iconhtml} viewBox="0 0 32 32" width="30">
                <use href={sprite + "#icon-node"}></use>
              </svg>
              NODE
            </div>
          </li>

          <div className={s.separator}>
            <div className={s.nameTag}> 
              <p>Tools and Other's</p>
            </div>
            <svg className="icon icon-line-tag">
              <use xlinkHref={sprite + "#icon-linetag"}></use>
            </svg>
          </div>
          
          <li className={s.grid}>
            <div className={s.box} id="node">
              <svg className={s.iconhtml} viewBox="0 0 32 32" width="30">
                <use href={sprite + "#icon-git"}></use>
              </svg>
              Git
            </div>
            <div className={s.box} id="node">
              <svg className={s.iconhtml} viewBox="0 0 32 32" width="30">
                <use href={sprite + "#icon-github"}></use>
              </svg>
              Git-Hub
            </div>
            <div className={s.box} id="node">
              <svg className={s.iconhtml} viewBox="0 0 32 32" width="30">
                <use href={sprite + "#icon-vscode"}></use>
              </svg>
              VS-Code
            </div>
            <div className={s.box} id="node">
              <svg className={s.iconhtml} viewBox="0 0 32 32" width="30">
                <use href={sprite + "#icon-sass"}></use>
              </svg>
              Sass
            </div>
            <div className={s.box} id="node">
              <svg className={s.iconhtml} viewBox="0 0 32 32" width="30">
                <use href={sprite + "#icon-bootstrap"}></use>
              </svg>
              Bootstrap
            </div>

            <div className={s.box} id="node">
              <svg className={s.iconhtml} viewBox="0 0 32 32" width="30">
                <use href={sprite + "#icon-mongodb"}></use>
              </svg>
              Mongo-Db
            </div>
            {/* </li> */}
            {/* <h4>Other's Skills</h4> */}
            {/* <li className={s.list}> */}
            <div className={s.box} id="node">
              <svg className={s.iconhtml} viewBox="0 0 32 32" width="30">
                <use href={sprite + "#icon-adobeil"}></use>
              </svg>
              illustrator
            </div>

            <div className={s.box} id="node">
              <svg className={s.iconhtml} viewBox="0 0 32 32" width="30">
                <use href={sprite + "#icon-adobeli"}></use>
              </svg>
              lightroom
            </div>

            <div className={s.box} id="node">
              <svg className={s.iconhtml} viewBox="0 0 32 32" width="30">
                <use href={sprite + "#icon-adobepho"}></use>
              </svg>
              Photoshop
            </div>

            <div className={s.box} id="node">
              <svg className={s.iconhtml} viewBox="0 0 32 32" width="30">
                <use href={sprite + "#icon-figma"}></use>
              </svg>
              Figma
            </div>
          </li>
        </div>
      </div>
    </>
  );
};

export default Skills;
