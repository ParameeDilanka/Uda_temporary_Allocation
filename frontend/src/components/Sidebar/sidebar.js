import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './sidebar.css'

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/create">
      Temporary Allocation
      </a>

      <a className="menu-item" href="/list">
      Temporary Allocation List
      </a>

      <a className="menu-item" href="/detail">
        Details
      </a>

      <a className="menu-item" href="/detaillist">
        Detail List
      </a>
    </Menu>
  );
};