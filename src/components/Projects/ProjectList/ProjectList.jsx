import s from './ProjectList.module.scss';

const ProjectList = ({title, children}) => {
    return (
        <div style={{display:'flex',flexDirection:'column',alignItems:'flex-end'}}>
            <h2 className={s.titlproj}>{title}</h2>
            <ul className={s.Project}>
                {children}
            </ul>
        </div>
        )
};
export default ProjectList