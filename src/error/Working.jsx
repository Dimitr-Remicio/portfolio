import { useState, useEffect } from "react";


import Container from "../components/Container/Container";

import Dark from "../components/arrow/arrows";

function Error() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>  
      <Container>
        <div class="cont">
            <h1 class="h1">Error...</h1>
            <h3 class="h2">this page is in progress</h3>
            <h2 class="h3">ちょっと待って</h2>
        </div>
      </Container>
    </>
  );
}

export default Error;
