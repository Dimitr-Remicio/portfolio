import s from './Home.module.scss';
import './actions/index'


export default function Home() {

    return <>

        {/* <img className={s.patternBG} alt="" />    */}


        <div className={s.section}>
            <div id='blob' className={s.blob} ></div>
            <div id='blur' className={s.blur}></div>
            <div className={s.patternBG}></div>   

            <div className={s.contHome}>
                <p className={s.contHome__p}>I'M</p>
                <div className={s.contitle}><h1 className={s.contHome__h1}>FRONT-END</h1><div className={s.barTyping}></div></div>
                <h3 className={s.contHome__h3}>DEVELOPER</h3>
            </div>
            
        </div>
    </>
}
