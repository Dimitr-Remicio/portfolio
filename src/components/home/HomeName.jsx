import { useEffect, useRef } from "react";
import Typed from "typed.js";
import s from "./Home.module.scss";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const Home = () => {
  const el = useRef(null);
  const dev = "Developer";

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Front End " + dev, "Grapich Designer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 1000,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      smartBackspace: true,
      loop: true,
      showCursor: false,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  const item = {
    hidden: { opacity: 0, y: 200 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6,
      },
    },
    exit: {
      opacity: 0,
      y: -200,
      transition: {
        ease: "easeInOut",
        duration: 0.8,
      },
    },
  };
  const itemMain = {
    hidden: { opacity: 0, y: 200 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6,
      },
    },
  };
  const container = {
    show: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  };

  return (
    <>
      <div className={s.section} id="Home">
        <div className={s.blurredHome}></div>
        <div className="divme">
          <motion.div animate={{ opacity: 1, x: -100 }} initial={{opacity:0}} transition={{ duration: 0.3, delay: 0.1 }}>
            <Tilt
              className="parallax-effect"
              perspective={6000}
              transitionSpeed={9500}
              glareEnable={false}
              glareMaxOpacity={0}
              scale={0.95}
            >
              <img
                className="imgen2 cybr"
                alt="pic"
                src="public\assets\images\me3.png"
              />

              <div className="inner-element">
                <div className="eclipse">
                  <img
                    className="imgen cybr-btn__glitch"
                    alt="pic"
                    src="public\assets\images\me2.png"
                  />
                </div>
              </div>
            </Tilt>
          </motion.div>
        </div>

        {/* <div id="blob" className="blob"></div>
        <div id="blur" className="blur"></div> */}

        <div className={s.bgHome}></div>

        <div className={s.contHome}>
          <motion.div
            initial={{
              opacity: 0,
              y:-100,
            }}
            animate={{
              opacity: 1,
              y: 0,
              x:0,
            }}
            transition={{
              delay:0,
              duration: 0.8,
            }}
          >
            <h1 className={s.contHome__p}>Dimitr Remicio</h1>
            <div className={s.contitle}>
              <h1 className={s.contHome__h1} ref={el}></h1>
              <div id="Bartyping" className={s.barTyping}></div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;
