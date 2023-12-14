import s from "./ProjectList.module.scss";
import PropTypes from "prop-types";

const ProjectList = ({ children }) => {
  return (
    <div id="Projects">
      <h2 className={s.Project__title}>Projects</h2>
      <ul className={s.Project}>{children}</ul>
    </div>
  );
};
ProjectList.propTypes = {
  children: PropTypes.element,
};

export default ProjectList;
