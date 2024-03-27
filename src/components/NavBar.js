import React from 'react'

import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <nav>
       <NavLink to="/page1">Página 1</NavLink>
      <NavLink to="/page2">Página 2</NavLink> 
      <NavLink to="/page3">Página 3</NavLink> 
      {/*<NavLink to="/">Home</NavLink>
      <NavLink to="/about">Sobre</NavLink>*/}


    </nav>
    </div>
  )
}

export default NavBar
