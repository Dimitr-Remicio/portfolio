import s from './ProjectList.module.scss';
import PropTypes from 'prop-types';

const ProjectList = ({title, children}) => {
    return (
        <div className="Section__projects" id="Projects"  >
            <h2 className={s.titlproj}>{title}</h2>
            <ul className={s.Project}>
                {children}
            </ul>
        </div>
        )
};
ProjectList.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element,
  };

export default ProjectList