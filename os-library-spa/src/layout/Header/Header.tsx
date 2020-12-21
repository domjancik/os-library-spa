import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import Search from '../../features/search/Search';
import classes from './Header.module.css';
import HeaderTitle from './HeaderTitle/HeaderTitle';

function Header(): ReactElement {
  return (
    <div className={classes.Header}>
      <HeaderTitle text="OSS Libraries" />
      <ul>
        <li><NavLink activeClassName={classes.Active} exact to="/">All Libraries</NavLink></li>
        <li>
          <NavLink activeClassName={classes.Active} to="/library/new">
            New Library
          </NavLink>
        </li>
      </ul>
      <Search />
    </div>
  );
}

export default Header;
