import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: red;
`;
const Title1 = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: blue;
`;

const Home = props => (
  <div className="home">
    {
      props.goal && props.user.weight ?
        <div>
          <Title> Welcome to MyFitnessClone!</Title> <br></br>
          <i> This page will show your calorie goal and how much you&#39;ve accomplished </i> <br></br>
          <i> Your current weight and your macro split</i> <br></br>
          <b> Weight: {props.user.weight[props.user.weight.length - 1]} </b> <br></br>
          <b> Calories: {props.goal.calorie} </b> <br></br>
          <b> Carbs: {props.goal.carbs} </b> <br></br>
          <b> Protein: {props.goal.protein} </b> <br></br>
          <b> Fat: {props.goal.fat} </b> <br></br>
          <i> Will have a link to get started if you are new </i> <br></br>
          <br></br>
          <Link to="/addfood"> Add Food </Link>
          <br></br>
          <Link to="/goal"> Click here to get started! </Link>
        </div>
        :
        <div>
          <Title1> Welcome to MyFitnessClone! </Title1> <br></br>
          <i> This page will show your calorie goal and how much you&#39;ve accomplished </i> <br></br>
          <i> Your current weight and your macro split</i> <br></br>
          <i> Will have a link to get started if you are new </i> <br></br>
          <Link to="/login"> Log-in to get started! </Link> <br></br>
        </div>
    }
  </div>

);

module.exports = Home;
