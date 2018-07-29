import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const InitialGoalWrapper = styled.div`
 
  margin-left: 5%;
  margin-right: 5%;
`;

const GoalHeader = styled.h1`
  text-align: center;
  /* font-family: Arial, Verdana, Helvetica, sans-serif; */
  font-family: Georgia, serif;

`;

const MiscInfoHeader = styled.h2`

`;

const MacroResults = styled.h3`
  display: inline-block;
  width: 50%;
  text-align: center;
  font-family: "Oswald";
  text-transform: uppercase;
  font-weight: 500;
`;

const MacroInfo = styled.span`
  display: block;
  text-align: center;
  text-transform: none;
  font-weight: 300;
`;

const MiscInfoSpan = styled.span`
  font-weight: bold;
`;

const StyledInfoParagraph = styled.p`
  text-align: left;
`;

export default props => {
  console.log('props', props);
  const { age, height, gender, weight } = props.user;
  const description = props.goal ? props.goal.plan.description : null;
  return (
    <InitialGoalWrapper>
      <GoalHeader> Here is your custom plan! </GoalHeader>
      <StyledInfoParagraph> You are a {age} year old {gender === 'M' ? 'male' : 'female'} that is {height} inches tall
      and weighs {weight[weight.length - 1]} pounds!
      </StyledInfoParagraph>
      <MacroResults> Calories
        <MacroInfo> {props.calorie} </MacroInfo>
        <MacroInfo> Calories Per Day </MacroInfo>
      </MacroResults>
      <MacroResults> Carbs
        <MacroInfo> {props.carbs} </MacroInfo>
        <MacroInfo> Grams Per Day </MacroInfo>
      </MacroResults>
      <MacroResults> Protein
        <MacroInfo> {props.protein} </MacroInfo>
        <MacroInfo> Grams Per Day </MacroInfo>
      </MacroResults>
      <MacroResults> Fat
        <MacroInfo> {props.fat} </MacroInfo>
        <MacroInfo> Grams Per Day </MacroInfo>
      </MacroResults>
      <button onClick={props.updatingGoal}> Looks good! Update Goals </button>
      <p> Don&#39;t like it?
        <Link to="/goal"> Mistake? Re-enter Info </Link>
        <Link to="/goal"> Edit Goals Manually </Link>
      </p>

      <MiscInfoHeader> Here is how we calculated this </MiscInfoHeader>
      <StyledInfoParagraph>
        Your basal metabolic rate <MiscInfoSpan> (BMR) </MiscInfoSpan> is <MiscInfoSpan>{props.BMR}</MiscInfoSpan> calories per day.
        This is the least amount of calories your body needs for energy
        and to perform vital functions such as breathing and keeping warm.
      </StyledInfoParagraph>
      <StyledInfoParagraph>
        Your total daily energy expenditure is <MiscInfoSpan> {props.TDEE} </MiscInfoSpan>calories per day.
        This is how many calories you need to maintain your weight
        and level of physical activity!
      </StyledInfoParagraph>
      <StyledInfoParagraph>
        {description}
      </StyledInfoParagraph>

    </InitialGoalWrapper>
  );
};
