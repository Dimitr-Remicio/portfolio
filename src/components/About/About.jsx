import s from "./About.module.scss";
import Tilt from "react-parallax-tilt";
import sprite from "../../features/sprite.svg";

import image from "/assets/images/meimage2.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <motion.div
        id="About"
        className="contpage"
        initial={{ opacity: 0, y: -500 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        animate={{ y: 0 }}
      >
      <svg className="homepattern2">
          <use href={sprite + "#HomePattern"}></use>
        </svg>
        {/* <h2>About Me</h2> */}
        <div className={s.aboutcont}>
          <motion.div
            className={s.description}
            initial={{ opacity: 0, y: -500 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            animate={{ y: 0 }}
          >
            <p className={s.About__paragr}>
              {/* Hola, soy {""} */}
              {/* <b className={s.name}>Dimitr Remicio</b> */}
              {/* <br /> */}
              {/* <br /> */}
              Me gusta aprender nuevas tecnologías, seguir desafiándome y lograr
              un gran impacto.
              <br />
              <svg
                className={s.separator}
                // viewBox="2 3 300 10"
                viewBox="0 -25 700 50"
                width="100%"
                height=""
              >
                <use
                  className={s.name}
                  href={sprite + "#lines-separator"}
                ></use>
              </svg>
              <br />
              Me destaco en el Front-end el causar un gran impacto a primera
              vista es algo que es primordial en este dado que producir un sitio
              web moderno requiere la combinación de diseño, tecnología de
              servidor y la capacidad con la que interactúan los usuarios. creo
              que tener experiencia tanto en diseño, como en desarrollo permite
              lograr experiencias de usuario óptimas.
            </p>
            <br />
          </motion.div>
          <motion.div
          initial={{ opacity: 0, y: -500 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        animate={{ y: 0 }}
          >
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1800}
              scale={1.01}
              transitionSpeed={2000}
              gyroscope={false}

            >
              <div className="imgCont About__animate" id="Anim_tion">
                <Tilt
                  tiltMaxAngleX={5}
                  tiltMaxAngleY={5}
                  perspective={2000}
                  scale={1.0}
                  transitionSpeed={2000}
                  gyroscope={false}
                  glareEnable={true}
                  glareMaxOpacity={0.5}
                  glareColor="#ffffff"
                  glarePosition="bottom"
                  glareBorderRadius="10px"
                >
                  <img
                    src={image}
                    alt=""
                    className="contitem__imga imgAbout"
                    id="Anim_tion"
                  ></img>
                  <p className="textJpans">プログラマー</p>
                </Tilt>
              </div>
            </Tilt>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default About;
