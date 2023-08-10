
import { useContext } from 'react';

import s from './ProjectItem.module.scss';
import sprite from '../../../features/sprite.svg';

const ProjectItem = ({data, Context}) => {

    // const body = document.querySelector('#body');
    const theme = useContext(Context);


    return (
        // data.length > 1 ? <h1>error</h1> : 
        data.map(({ id, number, title, description, image, link, orientation}) => (
            <li key={id} className={'contitem__' + orientation }> 
                {/* <div className={s.contitem}> */}
                    <div className={s.contitem__info}>
                        <div className={s.contitem__descrp}>
                            <div className={s.numberitem}>
                                <div className={s.numberitem__svg}>
                                    <svg className={s.iconX} width="178" height="17" fill="none">
                                        <use style={{fill:'var(--accent-color)'}} href={sprite + "#Vector41"}>
                                        </use>
                                    </svg>
                                </div>
                                <div className={s.numberitem__number}>{number}</div>
                            </div>
                            <div className={s.descrp__title}>{title}</div>
                        </div>
                        <div className={s.contitem__description}>{description}</div>
                        <div><button ><a className='linkhover' href={link} target='_blank'>View</a></button></div>
                    </div>
                    <div className={s.contitem__imgCont}>
                        
                        {
                            image.length > 0  ? (
                                <img src={image + theme + '.jpg'} className={s.contitem__img} alt="image not found" />
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