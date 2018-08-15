import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

// Function used to require all images in upload folder because webpack cannot determine dynamic images during bundling
function importAll(r) {
  const images = {};
  r.keys().map(item => { images[item.replace('./', '')] = r(item); });
  return images;
}
const images = importAll(require.context('../../uploads/', false, /\.(png|jpe?g|svg)$/));

const HomeHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  row-gap: 1em;
  

  /* @media (min-width: 768px) {
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto 1fr;
  /* justify-content: center; */  /* Aligns elements on the vertical axis */
  /* align-items: center; */    /* Aligns elements horizontally */  
  /* row-gap: 1em; */
  /* } */
 
`;

const Title = styled.h1`
  grid-column: 1/2;
  text-align: center;
  color: white;
  margin-left: 15em;
  
  /* @media (min-width: 768px) {
    
    grid-column: 1/4;
    grid-row: 1/2;
  } */    
`;

const HomeImage = styled.img`
  width: 100%;
  height: auto;
 
`;

const UserDisplayInfoDiv = styled.div`
    /* grid-column: 1/4;
  grid-row: 3/5;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
grid - template- r ows: repeat(2, 1fr); */
`;

/* TODO: Experiment with float and have the text wrap around it */
const ProfileImage = styled.img`
  grid-column: 1/2;
  grid-row: 1/2;
  width: 100%;
  max-width: 400px;
  height: auto;
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

const Home = props => {
  const image = props.user.avatarUrl ? props.user.avatarUrl.split('\\').slice(6).join('/') : 'defaultImage.png';
  const { user, goal } = props;
  console.log('user', props.user);
  console.log('goal', props.goal);

  return (
    <HomeHeader>
      <HomeImage src={require('../../public/mfpimage.jpg')} />
      <Title> Welcome to MyFitnessClone!</Title>
      {user.id ?
        <UserDisplayInfoDiv>
          <ProfileImage src={images[image]} alt="Profile Picture" />
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
            <StyledLink to="/goal"> Edit Goals </StyledLink>
          </UserDisplayInfo>
          <form encType="multipart/form-data" onSubmit={props.uploadImage}>
            <input name="image" type="file" />
            <button type="submit"> Upload Image </button>
          </form>
          <button onClick={props.testing}> Click me </button>
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
export default Home;

