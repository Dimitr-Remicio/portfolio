import { useEffect, useState } from "react";
import sprite from "../../../features/sprite.svg";
import PropTypes from 'prop-types';


function ProjectUsed({ data }) {

  const [item, setItem] = useState([]);

  useEffect(() => {
    setItem(data);
  }, [data]);


  return (
    <div className="Tag-PR">
      {item.map((item, key) => {
        return (
          <div key={key} className="Tag-Item">
            {item}
            <div className="Tag-blr"></div>
          <img src={`/portfolio/assets/images/${item}.png`} width="22" height="22"/>
          </div>
        );
      })}
    </div>
  );

}

ProjectUsed.propTypes = {
  data: PropTypes.array
}

export default ProjectUsed;
