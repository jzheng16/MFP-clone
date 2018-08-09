// What states need to be passed in to this? What should the navbar include?
// States: User to determine whether or not to display Log - in / Sign - up or Log out
// Navbar should include a logo to redirect to home page, a food search, a log-in/sign-up or log out
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../../public/mfp.png';


const active = btoa(Math.random());

const NavBarWrapper = styled.div`
  display: grid;
  grid-template-rows: 100px;
  grid-template-columns: repeat(3, 1fr);
  background-color: #0070BF;

`;

const StyledNav = styled.nav`
  grid-column: 2/4;
  display: inline-block;
  background-color: #0070BF;
`;

const StyledHomeIcon = styled.img`
  width: auto;
  height: 60px;
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  font-size: 15px;
  display: inline-block;
  margin: 10px 10px 0px 10px;
  text-decoration: none;
  vertical-align: middle;

  &:hover {
    color: green;
  }

  &.${active} {
    color: black;
  }

`;

export default props => (
  <NavBarWrapper>
    {props.user.id ?
      <StyledNav>
        <StyledNavLink id="navhome" to="/" exact activeClassName={active}>  <StyledHomeIcon src={logo} alt="MyFitnessPal" />  </StyledNavLink>
        <StyledNavLink to="/diary" exact activeClassName={active}> Diary </StyledNavLink>
        <StyledNavLink to="/measurements" exact activeClassName={active}> Track Measurements </StyledNavLink>
        <StyledNavLink to="/goal" exact activeClassName={active}>Goals </StyledNavLink>
        <StyledNavLink to="/me" exact activeClassName={active}> Me! </StyledNavLink>
        <StyledNavLink to="/logout" id="logout" onClick={props.handleLogout}> Logout </StyledNavLink>
      </StyledNav>
      :
      <StyledNav>
        <StyledNavLink to="/" exact activeClassName={active}>  <StyledHomeIcon src={logo} alt="MyFitnessPal" /> </StyledNavLink>
        <StyledNavLink to="/foods" exact activeClassName={active}> Foods </StyledNavLink>
        <StyledNavLink to="/login" exact activeClassName={active}> Log-In </StyledNavLink>
        <StyledNavLink to="/signup" exact activeClassName={active}> Sign-up</StyledNavLink>
      </StyledNav>

    }
  </NavBarWrapper>

);

