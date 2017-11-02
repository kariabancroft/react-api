import React from 'react';

export const Nav = () => (
  <div className="ui secondary  menu">
    <a className="active item">
      Home
    </a>
    <a className="item">
      Messages
    </a>
    <a className="item">
      Friends
    </a>
    {/*<div class="right menu">
      <div class="item">
        <div class="ui icon input">
          <input type="text" placeholder="Search..." />
          <i class="search link icon"></i>
        </div>
      </div>
      <a class="ui item">
        Logout
      </a>
    </div>*/}
  </div>
);

export default Nav;
