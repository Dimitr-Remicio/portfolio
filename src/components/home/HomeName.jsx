import { useEffect, useRef } from "react";
import Typed from "typed.js";
import s from "./Home.module.scss";



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
  
  
  
  return (
    <>

      <div className={s.section} id="Home">
        <div className={s.blurredHome}></div>

        
        <div className={s.bgHome}></div>
        
        <div className={s.contHome}>
          <h1 className={s.contHome__p}>Dimitr Remicio</h1>
          <div className={s.contitle}>
            <h1 className={s.contHome__h1} ref={el}></h1>
            <div id="Bartyping" className={s.barTyping}></div>
          </div>
          {/* <h3 className={s.contHome__h3}>Developer</h3> */}
        </div>
      </div>
    </>
  );
};


export default Home;
