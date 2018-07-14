import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';


const Title = styled.h1`
  position: relative;
  top: 400px;
  font-size: 1.5em;
  text-align: center;
  color: orange;
`;
const MiscInfo = styled.p`
  text-align: left;
  font-family: serif;
  text-transform: none;
`;

const UserDisplayInfo = styled.ul`
  list-style: none;    /* list-style shorthand for list-style-type image position */
  padding-left: 2rem;
`;

const InfoList = styled.li`
`;

const HomeHeader = styled.div`
  position: relative;
`;

const HomeImage = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  margin: 0 auto;
`;

const StyledLink = styled(Link)`

  &:link{
    color: #265301;
  }
  &:hover {
    border-bottom: 1px transparent;     
    background: #CDFEAA;
  }
  
`;

const StyledButton = styled.button`
  color: black;
  font-size: 1em;
  margin: 1em;
  padding: .25em 1em;
  border-radius: 2px;
`;

const Home = props => (
  <HomeHeader>

    <Title> Welcome to MyFitnessClone!</Title>
    <HomeImage src={require('../../public/mfpimage.jpg')} />
    <hr />
    {props.goal && props.user.weight ?
      <div>
        <h2> Welcome back {props.user.first_name} {props.user.last_name}! </h2>
        <MiscInfo>
          This page will show your calorie goal and how much you&#39;ve accomplished <br></br>
          Your current weight and your macro split <br></br>
        </MiscInfo>

        <UserDisplayInfo>
          <InfoList> Weight: {props.user.weight[props.user.weight.length - 1]} </InfoList>
          <InfoList> Calories: {props.goal.calorie} </InfoList>
          <InfoList> Carbs: {props.goal.carbs} </InfoList>
          <InfoList> Protein: {props.goal.protein} </InfoList>
          <InfoList> Fat: {props.goal.fat} </InfoList>
        </UserDisplayInfo>

        <StyledLink to="/addfood"> <StyledButton > Add Food </StyledButton> </StyledLink>

        <StyledLink to="/goal"> Edit Goals </StyledLink>

      </div>
      :
      <div>
        <MiscInfo>
          This page will show your calorie goal and how much you&#39;ve accomplished <br></br>
          Your current weight and your macro split <br></br>
          Will have a link to get started if you are new  <br></br>
        </MiscInfo>
        <Link to="/login"> Log-in to get started! </Link> <br></br>
      </div>

    }
  </HomeHeader>

);

export default Home;
