

import s from "./About.module.scss";

const About = () => {
  return (
    <>
      <div id="About">
          <h2>About</h2>
          <div className={s.aboutcont}>
            <div className="contitem__imgCont" id="Anim_tion">
              <img
                src="src/assets/images/Sintítulo.png"
                id="Anim_tion"
                className="contitem__img"
                alt="image not found"
              />
            </div>
        </div>
      </div>
    </>
  );
};

export default About;
