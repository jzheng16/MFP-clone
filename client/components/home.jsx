import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';


const HomeHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  grid-gap: 10px;
`;

const Title = styled.h1`
  grid-column: 1/4;
  grid-row: 1/3;
  text-align: center;
  color: white;
  padding-right: 500px;
`;

const HomeImage = styled.img`
  grid-column: 1/4;
  grid-row: 1/3;
  width: 100%;
  height: auto;
  /* margin: 0 auto; */
`;
const MiscInfo = styled.p`
  text-align: left;
  font-size: 20px;
  font-family: serif;
  text-transform: none;
`;

const UserDisplayInfoDiv = styled.div`
  grid-column: 1/3;
  grid-row: 3/4;
`;

const UserDisplayInfo = styled.ul`
  list-style: none;    /* list-style shorthand for list-style-type image position */
  padding-left: 2rem;
`;

const InfoList = styled.li`
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
    <HomeImage src={require('../../public/mfpimage.jpg')} />
    <Title> Welcome to MyFitnessClone!</Title>
    <hr />
    {props.goal && props.user.weight ?
      <UserDisplayInfoDiv>
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

      </UserDisplayInfoDiv>
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
