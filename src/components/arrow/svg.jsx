const ThemeToggle = () => {
    return(
        <div >
            
        <svg className='iconModeDark' xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="none" id="chk">
              <path className='linedarkmd' stroke="" strokeLinecap="square" strokeWidth="2" d="M1 9.76V1h9.345M37.21 1h8.76v8.76m0 25.699v9.345h-8.76m-26.866 0H1v-9.345"/>
              <g className='moon' clipPath="url(#a)">
                <path fill='' d="M27.317 26.092a7.41 7.41 0 0 1-7.41-7.41c0-1.348.386-2.594 1.015-3.681C17.51 15.985 15 19.093 15 22.823A8.177 8.177 0 0 0 23.176 31c3.729 0 6.84-2.512 7.824-5.922-1.09.627-2.336 1.014-3.683 1.014Z"/>
                </g>
                <defs>
                  <clipPath id="a"><path fill="" d="M15 15h16v16H15z"/></clipPath>
                </defs>
            </svg>
                  </div>
    )
}

export default ThemeToggle;