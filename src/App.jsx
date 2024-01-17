import { createContext, useState, useEffect } from "react";

import "./App.scss";
import "./actions.js";

import Container from "./components/Container/Container";

import Home from "./components/home/HomeName";

import ProjectList from "./components/Projects/ProjectList/ProjectList";
import ProjectItem from "./components/Projects/ProjectItem/ProjectItem";
import projects from "./services/projects.json";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import ContactMe from "./components/ContactMe/ContactMe";


import sprite from "/src/features/sprite.svg";
import Dark from "./components/arrow/arrows";
import Head from "./components/Head/Head.jsx";
import Arrow from "./components/home/Arrow.jsx";

function App() {
  const [theme, setTheme] = useState("dark");

  const ThemeContext = createContext(null);

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
      {/* <div id="bgpage"></div> */}

     

      <div className="header">
        <div className="blurHd"></div>
        <Container>
          <div className="header__cont">
            <Head></Head>
          </div>
        </Container>
        <div className="darktoogle">
          <svg
            className="iconModeDark"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="none"
            id="chk"
            viewBox="-1 -4 50 50"
            onClick={toggleTheme}
          >
            <path
              className="linedarkmd"
              stroke=""
              strokeLinecap="square"
              strokeWidth="1"
              d="M1 9.76V1h9.345M37.21 1h8.76v8.76m0 25.699v9.345h-8.76m-26.866 0H1v-9.345"
            />
            <g className="moon" clipPath="url(#a)">
              <path
                fill=""
                d="M27.317 26.092a7.41 7.41 0 0 1-7.41-7.41c0-1.348.386-2.594 1.015-3.681C17.51 15.985 15 19.093 15 22.823A8.177 8.177 0 0 0 23.176 31c3.729 0 6.84-2.512 7.824-5.922-1.09.627-2.336 1.014-3.683 1.014Z"
              />
            </g>
            <defs>
              <clipPath id="a">
                <path fill="" d="M15 15h16v16H15z" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>

      <Dark toggle={toggleTheme} onClick={toggleTheme} />
      
      {/* <div className="bodyBlur"> */}
      {/* <div id="blob" className="blob"></div>w */}
      {/* <div id="blur" className="blur"></div> */}
      {/* </div> */}

      <div className="sections">
        <Container className="section">
          <>
            <div className="shadowHome"></div>
            <Home contain={ThemeContext} />
            <Arrow/>
          </>
        </Container>

        <Container className="section">
          <ProjectList>
            <ThemeContext.Provider value={theme}>
              <ProjectItem data={projects} Context={ThemeContext} />
            </ThemeContext.Provider>
          </ProjectList>
        </Container>

        <Container className="section">
          <About Context={ThemeContext} />
        </Container>

        <Container className="section">
          <Skills Context={ThemeContext} />
        </Container>

        <Container className="section">
          <ContactMe Context={ThemeContext} />
        </Container>
      </div>

      {/* <Container>
        <div className="contsvgpage"></div>
      </Container> */}
    </>
  );
}

export default App;

// <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 10000" className="svgBodyleft" width="100" height="auto" fill="none"><path style={{stroke:'var(--stroke-icon)'}} strokeWidth="3" d="M90.5 15368 90.501 0"/><path fill="" d="M49 3849h87v875H49z"/><path style={{fill:'var(--stroke-icon)', strokeWidth:'3px'}} d="m51.828 4577.84 25.404-12.18c12.528 5.72 22.62 12.49 30.276 20.3 7.656 7.73 13.649 16.97 17.98 27.72 4.331 10.67 8.004 24.09 11.02 40.25l-4.756 2.67c-5.104 2.79-9.589 5.42-13.456 7.89-3.867 2.48-7.385 5.14-10.556 8-1.469-20.1-4.563-35.72-9.28-46.86-4.717-11.21-11.175-19.8-19.372-25.75l.116 17.05c.155 24.67.503 42.77 1.044 54.29h-28.42v-93.38Zm-.348-22.97v-100.92h82.128v30.16h-5.104v40.6h5.104v30.16H51.48Zm53.36-30.16v-40.6H75.028v40.6h29.812Zm30.972-93.26c-6.264 1.7-11.523 3.4-15.776 5.1-4.331 1.62-8.739 4.06-13.224 7.31 0-14.46-.928-26.41-2.784-35.85-1.933-9.51-5.065-17.67-9.396-24.47-3.944-6.19-9.628-10.98-17.052-14.39-7.424-3.4-16.82-5.76-28.188-7.07 1.624-4.64 3.055-9.2 4.292-13.69 1.16-4.56 2.513-10.13 4.06-16.7 14.384 1.85 26.061 5.37 35.032 10.55 8.971 5.11 16.627 12.14 22.968 21.11 5.723 8.05 10.131 17.44 13.224 28.19s5.375 24.05 6.844 39.91Zm-47.328-33.88c-3.557 9.59-6.187 17.33-7.888 23.2-1.701 5.88-3.596 14.08-5.684 24.6-3.48-3.64-7.54-7.35-12.18-11.14-4.717-3.79-8.623-6.57-11.716-8.35 2.707-9.75 5.336-18.45 7.888-26.1a341.698 341.698 0 0 1 8.7-23.2l20.88 20.99Zm-3.016-179.68c4.176 2.63 8.313 4.64 12.412 6.03 4.021 1.39 9.319 2.94 15.892 4.64-5.723 15.93-10.749 34.65-15.08 56.15h36.888v32.71c-12.992-.54-25.984-.85-38.976-.93-12.992-.15-29.232-.23-48.72-.23v-31.55h24.012c1.237-10.21 3.093-21.35 5.568-33.41 2.475-12.14 5.143-23.28 8.004-33.41Zm-6.612-76.56h22.852v-38.51h25.404v107.41h-25.404v-38.51H78.856v33.64h-24.36v-97.67h24.36v33.64Zm56.956-57.88c-6.264 1.7-11.523 3.4-15.776 5.1-4.331 1.62-8.739 4.06-13.224 7.31 0-14.46-.928-26.41-2.784-35.85-1.933-9.51-5.065-17.67-9.396-24.47-3.944-6.19-9.628-10.98-17.052-14.39-7.424-3.4-16.82-5.76-28.188-7.07 1.624-4.64 3.055-9.2 4.292-13.69 1.16-4.56 2.513-10.13 4.06-16.7 14.384 1.85 26.061 5.37 35.032 10.55 8.971 5.11 16.627 12.14 22.968 21.11 5.723 8.05 10.131 17.44 13.224 28.19s5.375 24.05 6.844 39.91Zm-47.328-33.88c-3.557 9.59-6.187 17.33-7.888 23.2-1.701 5.88-3.596 14.08-5.684 24.6-3.48-3.64-7.54-7.35-12.18-11.14-4.717-3.79-8.623-6.57-11.716-8.35 2.707-9.75 5.336-18.45 7.888-26.1a341.698 341.698 0 0 1 8.7-23.2l20.88 20.99Zm-3.016-179.68c4.176 2.63 8.313 4.64 12.412 6.03 4.021 1.39 9.319 2.94 15.892 4.64-5.723 15.93-10.749 34.65-15.08 56.15h36.888v32.71c-12.992-.54-25.984-.85-38.976-.93-12.992-.15-29.232-.23-48.72-.23v-31.55h24.012c1.237-10.21 3.093-21.35 5.568-33.41 2.475-12.14 5.143-23.28 8.004-33.41Zm-12.064 14.04c-5.413 1.23-11.407 3.44-17.98 6.61l-2.9-9.28a91.997 91.997 0 0 1 17.864-6.73l3.016 9.4Zm3.828 12.06c-6.032 1.47-12.025 3.71-17.98 6.73l-2.9-9.28c6.11-3.09 12.064-5.34 17.864-6.73l3.016 9.28Z"/><path fill="" d="M49 10009h87v875H49z"/><path style={{fill:'var(--stroke-icon)', strokeWidth:'3px'}}d="m51.828 10738.2 25.404-12.2c12.528 5.8 22.62 12.5 30.276 20.3 7.656 7.8 13.649 17 17.98 27.8 4.331 10.6 8.004 24 11.02 40.2l-4.756 2.7c-5.104 2.8-9.589 5.4-13.456 7.9a71.55 71.55 0 0 0-10.556 8c-1.469-20.1-4.563-35.8-9.28-46.9-4.717-11.2-11.175-19.8-19.372-25.8l.116 17.1c.155 24.7.503 42.8 1.044 54.3h-28.42v-93.4Zm-.348-23v-100.9h82.128v30.2h-5.104v40.6h5.104v30.1H51.48Zm53.36-30.1v-40.6H75.028v40.6h29.812Zm30.972-93.3c-6.264 1.7-11.523 3.4-15.776 5.1-4.331 1.6-8.739 4.1-13.224 7.3 0-14.4-.928-26.4-2.784-35.8-1.933-9.5-5.065-17.7-9.396-24.5-3.944-6.2-9.628-11-17.052-14.4-7.424-3.4-16.82-5.7-28.188-7.1 1.624-4.6 3.055-9.2 4.292-13.6 1.16-4.6 2.513-10.2 4.06-16.7 14.384 1.8 26.061 5.3 35.032 10.5 8.971 5.1 16.627 12.2 22.968 21.1 5.723 8.1 10.131 17.5 13.224 28.2 3.093 10.8 5.375 24.1 6.844 39.9Zm-47.328-33.9c-3.557 9.6-6.187 17.4-7.888 23.2-1.701 5.9-3.596 14.1-5.684 24.6-3.48-3.6-7.54-7.3-12.18-11.1-4.717-3.8-8.623-6.6-11.716-8.4 2.707-9.7 5.336-18.4 7.888-26.1 2.552-7.6 5.452-15.3 8.7-23.2l20.88 21Zm-3.016-179.6c4.176 2.6 8.313 4.6 12.412 6 4.021 1.4 9.319 2.9 15.892 4.6-5.723 16-10.749 34.7-15.08 56.2h36.888v32.7c-12.992-.6-25.984-.9-38.976-.9-12.992-.2-29.232-.3-48.72-.3v-31.5h24.012c1.237-10.2 3.093-21.4 5.568-33.4 2.475-12.2 5.143-23.3 8.004-33.4Zm-6.612-76.6h22.852v-38.5h25.404v107.4h-25.404v-38.5H78.856v33.6h-24.36v-97.6h24.36v33.6Zm56.956-57.9c-6.264 1.7-11.523 3.4-15.776 5.1-4.331 1.6-8.739 4.1-13.224 7.3 0-14.4-.928-26.4-2.784-35.8-1.933-9.5-5.065-17.7-9.396-24.5-3.944-6.2-9.628-11-17.052-14.4-7.424-3.4-16.82-5.7-28.188-7.1 1.624-4.6 3.055-9.2 4.292-13.6 1.16-4.6 2.513-10.2 4.06-16.7 14.384 1.8 26.061 5.3 35.032 10.5 8.971 5.1 16.627 12.2 22.968 21.1 5.723 8.1 10.131 17.5 13.224 28.2 3.093 10.8 5.375 24.1 6.844 39.9Zm-47.328-33.9c-3.557 9.6-6.187 17.4-7.888 23.2-1.701 5.9-3.596 14.1-5.684 24.6-3.48-3.6-7.54-7.3-12.18-11.1-4.717-3.8-8.623-6.6-11.716-8.4 2.707-9.7 5.336-18.4 7.888-26.1 2.552-7.6 5.452-15.3 8.7-23.2l20.88 21Zm-3.016-179.6c4.176 2.6 8.313 4.6 12.412 6 4.021 1.4 9.319 2.9 15.892 4.6-5.723 16-10.749 34.7-15.08 56.2h36.888v32.7c-12.992-.6-25.984-.9-38.976-.9-12.992-.2-29.232-.3-48.72-.3v-31.5h24.012c1.237-10.2 3.093-21.4 5.568-33.4 2.475-12.2 5.143-23.3 8.004-33.4Zm-12.064 14c-5.413 1.2-11.407 3.4-17.98 6.6l-2.9-9.3c5.723-2.8 11.677-5.1 17.864-6.7l3.016 9.4Zm3.828 12.1c-6.032 1.4-12.025 3.7-17.98 6.7l-2.9-9.3c6.11-3.1 12.064-5.3 17.864-6.7l3.016 9.3Z"/></svg>
// <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 10000" className="svgBodyright" width="100" height="auto" fill="none"><path style={{stroke:'var(--stroke-icon)'}}  strokeWidth="3" d="M90.5 15368 90.501 0"/><path fill="" d="M49 6918h87v875H49zM49 13452h87v875H49z"/><path style={{fill:'var(--stroke-icon)', strokeWidth:'3px'}} d="m51.828 7647.21 25.404-12.18c12.528 5.72 22.62 12.49 30.276 20.3 7.656 7.73 13.649 16.97 17.98 27.72 4.331 10.68 8.004 24.09 11.02 40.26l-4.756 2.66c-5.104 2.79-9.589 5.42-13.456 7.89-3.867 2.48-7.385 5.14-10.556 8.01-1.469-20.11-4.563-35.73-9.28-46.87-4.717-11.21-11.175-19.8-19.372-25.75l.116 17.05c.155 24.67.503 42.77 1.044 54.29h-28.42v-93.38Zm-.348-22.97v-100.92h82.128v30.16h-5.104v40.6h5.104v30.16H51.48Zm53.36-30.16v-40.6H75.028v40.6h29.812Zm30.972-93.26c-6.264 1.7-11.523 3.4-15.776 5.1-4.331 1.63-8.739 4.06-13.224 7.31 0-14.46-.928-26.41-2.784-35.84-1.933-9.52-5.065-17.68-9.396-24.48-3.944-6.19-9.628-10.98-17.052-14.38-7.424-3.41-16.82-5.77-28.188-7.08 1.624-4.64 3.055-9.2 4.292-13.69 1.16-4.56 2.513-10.13 4.06-16.7 14.384 1.85 26.061 5.37 35.032 10.55 8.971 5.11 16.627 12.14 22.968 21.12 5.723 8.04 10.131 17.43 13.224 28.18s5.375 24.05 6.844 39.91Zm-47.328-33.87c-3.557 9.58-6.187 17.32-7.888 23.2-1.701 5.87-3.596 14.07-5.684 24.59-3.48-3.64-7.54-7.35-12.18-11.14-4.717-3.79-8.623-6.57-11.716-8.35 2.707-9.74 5.336-18.44 7.888-26.1a341.698 341.698 0 0 1 8.7-23.2l20.88 21Zm-3.016-179.69c4.176 2.63 8.313 4.64 12.412 6.03 4.021 1.4 9.319 2.94 15.892 4.64-5.723 15.93-10.749 34.65-15.08 56.15h36.888v32.71c-12.992-.54-25.984-.85-38.976-.93-12.992-.15-29.232-.23-48.72-.23v-31.55h24.012c1.237-10.21 3.093-21.35 5.568-33.41 2.475-12.14 5.143-23.28 8.004-33.41Zm-6.612-76.56h22.852v-38.51h25.404v107.42h-25.404v-38.52H78.856v33.64h-24.36v-97.67h24.36v33.64Zm56.956-57.88c-6.264 1.7-11.523 3.4-15.776 5.1-4.331 1.63-8.739 4.06-13.224 7.31 0-14.46-.928-26.41-2.784-35.84-1.933-9.52-5.065-17.68-9.396-24.48-3.944-6.19-9.628-10.98-17.052-14.38-7.424-3.41-16.82-5.77-28.188-7.08 1.624-4.64 3.055-9.2 4.292-13.69 1.16-4.56 2.513-10.13 4.06-16.7 14.384 1.85 26.061 5.37 35.032 10.55 8.971 5.11 16.627 12.14 22.968 21.12 5.723 8.04 10.131 17.43 13.224 28.18s5.375 24.05 6.844 39.91Zm-47.328-33.87c-3.557 9.58-6.187 17.32-7.888 23.2-1.701 5.87-3.596 14.07-5.684 24.59-3.48-3.64-7.54-7.35-12.18-11.14-4.717-3.79-8.623-6.57-11.716-8.35 2.707-9.74 5.336-18.44 7.888-26.1a341.698 341.698 0 0 1 8.7-23.2l20.88 21Zm-3.016-179.69c4.176 2.63 8.313 4.64 12.412 6.03 4.021 1.4 9.319 2.94 15.892 4.64-5.723 15.93-10.749 34.65-15.08 56.15h36.888v32.71c-12.992-.54-25.984-.85-38.976-.93-12.992-.15-29.232-.23-48.72-.23v-31.55h24.012c1.237-10.21 3.093-21.35 5.568-33.41 2.475-12.14 5.143-23.28 8.004-33.41Zm-12.064 14.04c-5.413 1.23-11.407 3.44-17.98 6.61l-2.9-9.28a92.648 92.648 0 0 1 17.864-6.73l3.016 9.4Zm3.828 12.06c-6.032 1.47-12.025 3.71-17.98 6.73l-2.9-9.28c6.11-3.09 12.064-5.34 17.864-6.73l3.016 9.28ZM51.828 14181.2l25.404-12.2c12.528 5.8 22.62 12.5 30.276 20.3 7.656 7.8 13.649 17 17.98 27.8 4.331 10.6 8.004 24 11.02 40.2l-4.756 2.7c-5.104 2.8-9.589 5.4-13.456 7.9a71.55 71.55 0 0 0-10.556 8c-1.469-20.1-4.563-35.8-9.28-46.9-4.717-11.2-11.175-19.8-19.372-25.8l.116 17.1c.155 24.7.503 42.8 1.044 54.3h-28.42v-93.4Zm-.348-23v-100.9h82.128v30.2h-5.104v40.6h5.104v30.1H51.48Zm53.36-30.1v-40.6H75.028v40.6h29.812Zm30.972-93.3c-6.264 1.7-11.523 3.4-15.776 5.1-4.331 1.6-8.739 4.1-13.224 7.3 0-14.4-.928-26.4-2.784-35.8-1.933-9.5-5.065-17.7-9.396-24.5-3.944-6.2-9.628-11-17.052-14.4-7.424-3.4-16.82-5.7-28.188-7.1 1.624-4.6 3.055-9.2 4.292-13.6 1.16-4.6 2.513-10.2 4.06-16.7 14.384 1.8 26.061 5.3 35.032 10.5 8.971 5.1 16.627 12.2 22.968 21.1 5.723 8.1 10.131 17.5 13.224 28.2 3.093 10.8 5.375 24.1 6.844 39.9Zm-47.328-33.9c-3.557 9.6-6.187 17.4-7.888 23.2-1.701 5.9-3.596 14.1-5.684 24.6-3.48-3.6-7.54-7.3-12.18-11.1-4.717-3.8-8.623-6.6-11.716-8.4 2.707-9.7 5.336-18.4 7.888-26.1 2.552-7.6 5.452-15.3 8.7-23.2l20.88 21Zm-3.016-179.6c4.176 2.6 8.313 4.6 12.412 6 4.021 1.4 9.319 2.9 15.892 4.6-5.723 16-10.749 34.7-15.08 56.2h36.888v32.7c-12.992-.6-25.984-.9-38.976-.9-12.992-.2-29.232-.3-48.72-.3v-31.5h24.012c1.237-10.2 3.093-21.4 5.568-33.4 2.475-12.2 5.143-23.3 8.004-33.4Zm-6.612-76.6h22.852v-38.5h25.404v107.4h-25.404v-38.5H78.856v33.6h-24.36v-97.6h24.36v33.6Zm56.956-57.9c-6.264 1.7-11.523 3.4-15.776 5.1-4.331 1.6-8.739 4.1-13.224 7.3 0-14.4-.928-26.4-2.784-35.8-1.933-9.5-5.065-17.7-9.396-24.5-3.944-6.2-9.628-11-17.052-14.4-7.424-3.4-16.82-5.7-28.188-7.1 1.624-4.6 3.055-9.2 4.292-13.6 1.16-4.6 2.513-10.2 4.06-16.7 14.384 1.8 26.061 5.3 35.032 10.5 8.971 5.1 16.627 12.2 22.968 21.1 5.723 8.1 10.131 17.5 13.224 28.2 3.093 10.8 5.375 24.1 6.844 39.9Zm-47.328-33.9c-3.557 9.6-6.187 17.4-7.888 23.2-1.701 5.9-3.596 14.1-5.684 24.6-3.48-3.6-7.54-7.3-12.18-11.1-4.717-3.8-8.623-6.6-11.716-8.4 2.707-9.7 5.336-18.4 7.888-26.1 2.552-7.6 5.452-15.3 8.7-23.2l20.88 21Zm-3.016-179.6c4.176 2.6 8.313 4.6 12.412 6 4.021 1.4 9.319 2.9 15.892 4.6-5.723 16-10.749 34.7-15.08 56.2h36.888v32.7c-12.992-.6-25.984-.9-38.976-.9-12.992-.2-29.232-.3-48.72-.3v-31.5h24.012c1.237-10.2 3.093-21.4 5.568-33.4 2.475-12.2 5.143-23.3 8.004-33.4Zm-12.064 14c-5.413 1.2-11.407 3.4-17.98 6.6l-2.9-9.3c5.723-2.8 11.677-5.1 17.864-6.7l3.016 9.4Zm3.828 12.1c-6.032 1.4-12.025 3.7-17.98 6.7l-2.9-9.3c6.11-3.1 12.064-5.3 17.864-6.7l3.016 9.3Z"/></svg>
