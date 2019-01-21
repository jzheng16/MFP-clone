// What states need to be passed in to this? What should the navbar include?
// States: User to determine whether or not to display Log - in / Sign - up or Log out
// Navbar should include a logo to redirect to home page, a food search, a log-in/sign-up or log out
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { slide as Menu } from 'react-burger-menu';
import logo from '../../public/mfp.png';

const styles = {
  bmBurgerButton: {
    position: 'absolute',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: { background: '#373a47' },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: { background: '#bdc3c7' },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em',
    fontSize: '1.15em'
  },

  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em 1em 0 0'
  },
  bmItem: { display: 'block' },
  bmOverlay: { background: 'rgba(0, 0, 0, 0.3)' }
};


const active = btoa(Math.random());

const NavBarWrapper = styled.div`
  background-color: #0070BF;
  width: 100%;
  height: 100px;
  box-sizing: border-box;

  
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;

  background-color: #0070BF;
`;

const StyledHomeIcon = styled.img`
  /* width: auto; */
  height: 60px;
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  font-size: 1.5em;

  margin: 10px 1em 0px 1em;
  text-decoration: none;

  

  &:hover {
    color: green;
  }

  &.${active} {
    color: black;
  }
`;

const StyledMenuLink = styled(StyledNavLink)`
  padding-bottom: 1em;
`;

export default props => (
  props.width > 850 ?
    <NavBarWrapper>
      {props.user.id ?
        <StyledNav>
          <StyledNavLink id="navhome" to="/" exact activeClassName={active}>  <StyledHomeIcon src={logo} alt="MyFitnessPal" />  </StyledNavLink>
          <StyledNavLink to="/diary" exact activeClassName={active}> Diary </StyledNavLink>
          <StyledNavLink to="/measurement" exact activeClassName={active}> Track Measurements </StyledNavLink>
          <StyledNavLink to="/goal" exact activeClassName={active}>Goals </StyledNavLink>
          <StyledNavLink to="/me" exact activeClassName={active}> Me! </StyledNavLink>
          <StyledNavLink to="/logout" id="logout" onClick={props.handleLogout}> Logout </StyledNavLink>
        </StyledNav>
        :
        <StyledNav>
          <StyledNavLink to="/" exact activeClassName={active}>  <StyledHomeIcon src={logo} alt="MyFitnessPal" /> </StyledNavLink>
          <StyledNavLink to="/foods" exact activeClassName={active}> Foods </StyledNavLink>
          <StyledNavLink to="/login" exact activeClassName={active}> Login </StyledNavLink>
          <StyledNavLink to="/signup-step1" exact activeClassName={active}> Sign-up</StyledNavLink>
        </StyledNav>

      }
    </NavBarWrapper>
    :
    <NavBarWrapper>
      {props.user.id ?
        <Menu isOpen={props.isOpen} width={250} styles={styles}>
          <StyledMenuLink id="navhome" to="/" exact activeClassName={active} onClick={props.closeMenu}>  <StyledHomeIcon src={logo} alt="MyFitnessPal" />  </StyledMenuLink>
          <StyledMenuLink to="/diary" exact activeClassName={active} onClick={props.closeMenu}> Diary </StyledMenuLink>
          <StyledMenuLink to="/measurement" exact activeClassName={active} onClick={props.closeMenu}> Track Measurements </StyledMenuLink>
          <StyledMenuLink to="/goal" exact activeClassName={active} onClick={props.closeMenu}>Goals </StyledMenuLink>
          <StyledMenuLink to="/me" exact activeClassName={active} onClick={props.closeMenu}> Me! </StyledMenuLink>
          <StyledMenuLink to="/logout" id="logout" onClick={() => { props.handleLogout(); props.closeMenu(); }} > Logout </StyledMenuLink>
        </Menu>
        :
        <Menu isOpen={props.isOpen} width={250} styles={styles}>
          <StyledMenuLink to="/" exact activeClassName={active} onClick={props.closeMenu}>  <StyledHomeIcon src={logo} alt="MyFitnessPal" /> </StyledMenuLink>
          <StyledMenuLink to="/foods" exact activeClassName={active} onClick={props.closeMenu}> Foods </StyledMenuLink>
          <StyledMenuLink to="/login" exact activeClassName={active} onClick={props.closeMenu}> Login </StyledMenuLink>
          <StyledMenuLink to="/signup-step1" exact activeClassName={active} onClick={props.closeMenu}> Sign-up</StyledMenuLink>
        </Menu>
      }
    </NavBarWrapper >


);

