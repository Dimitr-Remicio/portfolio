import s from "./About.module.scss";
import Tilt from "react-parallax-tilt";
import sprite from "../../features/sprite.svg";

import image from "/assets/images/meimage2.jpg";

const About = () => {
  return (
    <>
      <div id="About">
        <h2>About</h2>
        <div className={s.aboutcont}>
          <div className={s.description}>
            <p className={s.About__paragr}>
              Hola, soy {""}
              <b className={s.name}>Dimitr Remicio</b>
              <br />
              <br />
              Un desarrollador Full-stack y diseñador Web. Me gusta aprender
              nuevas tecnologías, seguir desafiándome y lograr un gran impacto.
              <br />
              <svg
                className={s.separator}
                // viewBox="2 3 300 10"
                viewBox="0 -25 700 50"
                width="100%"
                height="auto"
              >
                <use
                  className={s.name}
                  href={sprite + "#lines-separator"}
                ></use>
              </svg>
              <br />
              Me destaco en el desarrollo Front-end. sin embargo, me apasiona el
              realizar diseño. Dado que producir un sitio web moderno requiere
              la combinación de diseño, tecnología de servidor y la capacidad
              con la que interactúan los usuarios. creo que tener experiencia
              tanto en diseño, como en desarrollo permite lograr experiencias de
              usuario óptimas.
            </p>
            <br />
          </div>  
          <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1800}
            scale={1.01}
            transitionSpeed={2000}
            gyroscope={true}
          >
            <div className="imgCont About__animate" id="Anim_tion">
              <Tilt
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                perspective={2000}
                scale={1.000}
                transitionSpeed={2000}
                // gyroscope={true}
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
        </div>
      </div>
    </>
  );
};

export default About;
