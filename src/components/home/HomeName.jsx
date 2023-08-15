import { useEffect, useRef, useContext  } from "react";
import Typed from "typed.js";
import s from "./Home.module.scss";



const Home = ({contain}) => {
  const el = useRef(null);
  const color = useContext(contain);


  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Front-end", "Back-end"], // Strings to display
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
  
  
  
  return (
    <>

      <div className={s.section} id="Home">
        <div id="blob" className="blob"></div>
        <div id="blur" className="blur"></div>
        <div className={s.bgHome}></div>

        <div className={s.contHome}>
          <p className={s.contHome__p}>I`M</p>
          <div className={s.contitle}>
            <h1 className={s.contHome__h1} ref={el}></h1>
            <div id="Bartyping" className={s.barTyping}></div>
          </div>
          <h3 className={s.contHome__h3}>DEVELOPER</h3>
        </div>
      </div>
    </>
  );
};


export default Home;
