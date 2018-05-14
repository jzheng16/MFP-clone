import React from 'react';
import { NavLink, Link } from 'react-router-dom';


const Home = props => (
  <div>
    {
      props.goal ?
        <div>
          <h1> Welcome to MyFitnessClone! </h1> <br></br>
          <i> This page will show your calorie goal and how much you&#39;ve accomplished </i> <br></br>
          <i> Your current weight and your macro split</i> <br></br>
          <b> Weight: {props.goal.weight} </b> <br></br>
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
        <div className="home">
          <h1> Welcome to MyFitnessClone! </h1> <br></br>
          <i> This page will show your calorie goal and how much you&#39;ve accomplished </i> <br></br>
          <i> Your current weight and your macro split</i> <br></br>
          <i> Will have a link to get started if you are new </i> <br></br>
        </div>
    }
  </div>

);

module.exports = Home;
