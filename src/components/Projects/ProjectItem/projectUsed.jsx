import { useEffect, useState } from "react";
import sprite from "../../../features/sprite.svg";

function ProjectUsed({ data }) {
  // const items = JSON.stringify(data);

  const [item, setItem] = useState([]);

  useEffect(() => {
    setItem(data);
  }, [data]);

  console.log(item);

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

  //   return `
  //       <P>${items}</P>
  //   `
}

export default ProjectUsed;
