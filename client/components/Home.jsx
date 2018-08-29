import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HomeBackgroundImage from '../../public/mfpimage.jpg';
import { Button, Ul, List } from './StyledComponents';
// Function used to require all images in upload folder because webpack cannot determine dynamic images during bundling
import images from './helper';


const breakpoints = { first: '470px' };

const HomeHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  row-gap: 1em;
  
  /* @media (min-width: 768px) {
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto 1fr;
  /* justify-content: center; */  /* Aligns elements on the vertical axis */
  /* align-items: center; */    /* Aligns elements horizontally */  
  /* row-gap: 1em; */
  /* } */
 
 
`;

const HomeImage = styled.img`
  grid-column: 1/2;
  grid-row: 1/2;
  width: 100%;
  height: auto;
`;
const Title = styled.h3`
  grid-column: 1/2;
  grid-row: 1/2;
  margin: 0;
  font-size: 4.5vw;
  height: 5em;
  color: white;
  margin-top: 3.5em;
  align-self: center;
  
 
  /* @media (min-width: 768px) {
    grid-column: 1/4;
    grid-row: 1/2;
  } */    
`;

Title.displayName = 'Title';

const UserDisplayInfoDiv = styled.div`
  width: 90%;
  margin: auto;
  /* grid-column: 1/4;
  grid-row: 3/5;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr); */
`;

/* TODO: Experiment with float and have the text wrap around it */
const ProfileImage = styled.img`
  grid-column: 1/2;
  grid-row: 1/2;
  width: 100%;
  
  height: auto;
  max-height: 200px;
  object-fit: contain;

`;
const MiscInfo = styled.p`
  grid-column: 2/3;
  grid-row: 1/2;
  text-align: left;
  font-size: 20px;
  font-family: serif;
  text-transform: none;
`;

const UserDisplayInfo = styled(Ul)`
`;

const InfoList = styled(List)`
 
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

const StyledButton = styled(Button)`
 background-color: #0070BF
 border-radius: 10px;
 border: none;
 color: white;
 padding: 8px 8px;
`;

const StyledUploadImage = styled.input`
  display: none;
`;

const StyledLabel = styled.label`
  width: 100%;
  height: 10em;
  &:hover {
    background-color: black;
  }
`;

const Home = ({ user, goal, uploadImage }) => {
  const profilePicture = user.avatarUrl || 'defaultImage.png';
  // console.log('user', props.user);
  // console.log('goal', props.goal);
  return (
    <HomeHeader>
      <HomeImage src={HomeBackgroundImage} />
      <Title>Welcome to MyFitnessClone!</Title>
      {user.id ?
        <UserDisplayInfoDiv>
          <StyledLabel htmlFor="fileUpload">
            <ProfileImage src={images[profilePicture]} alt="Profile Picture" />
            <StyledUploadImage name="image" type="file" id="fileUpload" onChange={uploadImage} />
          </StyledLabel>
          <MiscInfo>
            MyFitnessClone allows you to set and achieve your goals by making sure that you&#39;re on track! <br></br>
            This page will show your calorie goal and how much you&#39;ve accomplished for the day!<br></br>
          </MiscInfo>
          <UserDisplayInfo>
            <h3> Welcome back {user.first_name} </h3>
            <InfoList> Your current weight and your macro split: </InfoList>
            <InfoList> Weight: {user.weight ? user.weight[user.weight.length - 1] : 'Not Set'} </InfoList>
            <InfoList> Calories: {goal ? goal.calorie : 'Not Set'} </InfoList>
            <InfoList> Carbs: {goal ? goal.carbs : 'Not Set'} </InfoList>
            <InfoList> Protein: {goal ? goal.protein : 'Not Set'} </InfoList>
            <InfoList> Fat: {goal ? goal.fat : 'Not Set'} </InfoList>
            <StyledLink to="/addfood"> <StyledButton > Add Food </StyledButton> </StyledLink>
            <StyledLink to="/goal"> <StyledButton > Edit Goals </StyledButton> </StyledLink>
          </UserDisplayInfo>


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
};

Home.propTypes = {
  user: PropTypes.shape({
    age: PropTypes.number,
    avatarUrl: PropTypes.string,
    email: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    gender: PropTypes.string,
    height: PropTypes.number,
    id: PropTypes.number,
    verified: PropTypes.bool,
    weight: PropTypes.arrayOf(PropTypes.number)
  }),
  goal: PropTypes.shape({
    id: PropTypes.number,
    calorie: PropTypes.number,
    weight: PropTypes.number,
    carbs: PropTypes.number,
    protein: PropTypes.number,
    fat: PropTypes.number,
    user_id: PropTypes.number,
    plan_id: PropTypes.number,
    activity_id: PropTypes.number
  }),
  uploadImage: PropTypes.func.isRequired
};

Home.defaultProps = { user: {}, goal: {} };

export default Home;

