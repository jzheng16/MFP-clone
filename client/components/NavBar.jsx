// What states need to be passed in to this? What should the navbar include?
// States: User to determine whether or not to display Log - in / Sign - up or Log out
// Navbar should include a logo to redirect to home page, a food search, a log-in/sign-up or log out
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../public/mfp.png';

export default props => (
  <div className="nav">
    {props.user ?
      <nav className="navitems">
        <NavLink id="navhome" to="/home" exact activeClassName="active">  <img src={logo} alt="MyFitnessPal" height="40px" width="40px" />  </NavLink>
        <NavLink to="/diary" exact activeClassName="active"> Diary </NavLink>
        <NavLink to="/measurements" exact activeClassName="active"> Track Measurements </NavLink>
        <NavLink to="/goal" exact activeClassName="active">Goals </NavLink>
        <NavLink to="/me" exact activeClassName="active"> Me! </NavLink>
        <NavLink to="/logout" id="logout" onClick={props.handleLogout}> Logout </NavLink>
      </nav>
      :
      <nav>
        <NavLink to="/home" exact activeClassName="active">  <img src={logo} alt="MyFitnessPal" height="40px" width="40px" />  </NavLink>
        <NavLink to="/foods" exact activeClassName="active"> Foods </NavLink>
        <NavLink to="/login" exact activeClassName="active"> Log-In </NavLink>
        <NavLink to="/signup" exact activeClassName="active"> Sign-up</NavLink>
      </nav>

    }
  </div>

);

