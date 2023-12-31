import s from "./ProjectItem.module.scss";
import sprite from "../../../features/sprite.svg";
import Tilt from "react-parallax-tilt";
import { useContext } from "react";
import ProjectUsed from "./projectUsed";
import { motion } from "framer-motion";

const ProjectItem = ({ data, Context }) => {
  const theme = useContext(Context);
  const image = `/portfolio/assets/images/`;

  return data.map(
    ({ id, number, name, title, description, link, orientation, items }) => (
      <motion.li
        key={id}
        className={"contitem__" + orientation}
        initial={{ opacity: 0, y:-500}}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.1}}
        animate={{ y: 0 }}
      >
        <div className={s.contitem__info}>
          <div className={s.contitem__descrp}>
            <div className={s.numberitem}>
              <div className={s.numberitem__svg} id="Anim_tion">
                <svg className={s.iconX} width="178" height="17" fill="none">
                  <use
                    style={{ fill: "var(--accent-color)" }}
                    href={sprite + "#Vector41"}
                  ></use>
                </svg>
              </div>
              <div className={s.numberitem__number} id="Anim_tion">
                {number}
              </div>
            </div>
            <h4 className={s.descrp__title} id="Anim_tion">
              {title}
            </h4>
          </div>
          <div className={s.contitem__description} id="Anim_tion">
            {description}
          </div>
          <div>
            <ProjectUsed data={items}></ProjectUsed>
          </div>
        </div>
        <Tilt
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          perspective={1800}
          scale={1.02}
          transitionSpeed={2000}
          gyroscope={false}
        >
          <div className="contitem__imgCont" id="Anim_tion">
            {image.length > 0 ? (
              <Tilt
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                perspective={2000}
                scale={1.001}
                transitionSpeed={2000}
                gyroscope={false}
                glareEnable={true}
                glareMaxOpacity={0.5}
                glareColor="#ffffff"
                glarePosition="bottom"
                glareBorderRadius="10px"
              >
                <div className={"gradientAnimation" + theme}>
                  <div className={"backgroundAnimate" + theme}></div>
                  <img
                    src={image + name + theme + ".jpg"}
                    // id="Anim_tion"
                    className="imagePreview"
                    alt="image not found"
                  />
                </div>

                <img
                  src={image + name + theme + ".png"}
                  id="Anim_tion"
                  className="contitem__img"
                  alt="image not found"
                />
                <div id="Anim_tion" className="imagebutton">
                  <a
                    id="linkhover"
                    className="buttonimage"
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View
                  </a>
                </div>
              </Tilt>
            ) : (
              <p className={s.notfound}>image not found</p>
            )}
          </div>
        </Tilt>
      </motion.li>
    )
  );
};

export default ProjectItem;
