
import { useContext } from 'react';

import s from './ProjectItem.module.scss';
import sprite from '../../../features/sprite.svg';

const ProjectItem = ({data, Context}) => {

    // const body = document.querySelector('#body');
    const theme = useContext(Context);
    const image = '../../images/';
    
    return (
        // data.length > 1 ? <h1>error</h1> : 
        data.map(({ id, number, title, description, link, orientation}) => (
            <li key={id} className={'contitem__' + orientation } > 
                {/* <div className={s.contitem}> */}
                    <div className={s.contitem__info}>
                        <div className={s.contitem__descrp}>
                            <div className={s.numberitem}>
                                <div className={s.numberitem__svg} id='Anim_tion'>
                                    <svg className={s.iconX} width="178" height="17" fill="none" >
                                        <use style={{fill:'var(--accent-color)'}} href={sprite + "#Vector41"}>
                                        </use>
                                    </svg>
                                </div>
                                <div className={s.numberitem__number}id='Anim_tion'>{number}</div>
                            </div>
                            <p className={s.descrp__title} id='Anim_tion'>{title}</p>
                        </div>
                        <div className={s.contitem__description} id='Anim_tion'>{description}</div>
                        <div id="Anim_tion" className='divbutton'><a id="linkhover" className={s.button} href={link} target='_blank' rel='noreferrer'>View</a></div>
                    </div>
                    <div className={s.contitem__imgCont}id='Anim_tion' >
                        
                        {
                            image.length > 0  ? (
                                <img src={image + title + '-preview-' + theme + '.jpg'} id='Anim_tion' className={s.contitem__img} alt="image not found" />
                                )
                                :
                                (
                                <p className={s.notfound}>image not found</p>
                            )
                        }

                    </div>
                {/* </div> */}
            </li>
        ))       
    
    )
}

export default ProjectItem;