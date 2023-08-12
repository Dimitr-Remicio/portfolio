import s from './Home.module.scss';

import Typed from 'typed.js';

import { useEffect, useRef } from "react";



export default function Home() {
    const el = useRef(null);

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
  
    return <>

        {/* <img className={s.patternBG} alt="" />    */}


        <div className={s.section} id="Home" >
            <div id='blob' className={s.blob} ></div>
            <div id='blur' className={s.blur}></div>
            <div className={s.patternBG}></div>   

            <div className={s.contHome}>
                <p className={s.contHome__p}>I`&apos`M</p>
                <div className={s.contitle}>
                    {/* <h1 className={s.contHome__h1}>FRONT-END</h1><div className={s.barTyping}></div> */}
                    
                    {/* <text id="text" >
                        <div  id="Bartyping" className="barTyping">
                        </div>
                    </text> */}

                    <h1 className={s.contHome__h1} ref={el}></h1>
                        <div  id="Bartyping" className={s.barTyping}></div>
                </div>
                <h3 className={s.contHome__h3}>DEVELOPER</h3>
            </div>
            
        </div>
    </>
}
