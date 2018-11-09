import React from 'react';

const NavMenu = () => {
  return(
    <nav>
      <div className="nav-wrapper">
        <div className="container">
          <a href="/" className="brand-logo">logo</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default NavMenu;