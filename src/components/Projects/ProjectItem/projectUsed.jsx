import { useEffect, useState } from "react";
import sprite from "../../../features/sprite.svg";

function ProjectUsed({ data }) {
  // const items = JSON.stringify(data);

  const [item, setItem] = useState([]);

  useEffect(() => {
    return () => {
      setItem(data);
    };
  }, [data]);

  console.log(item);

  return (
    <div class="Tag-PR">
      {item.map((item, key) => {
        return (
          <div key={key} class="Tag-Item">
            {item}
            <div class="Tag-blr"></div>
          <img src={`/public/assets/images/${item}.png`} width="22" height="22"/>
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
