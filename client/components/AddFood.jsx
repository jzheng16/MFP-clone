import React from 'react';
import { Input, Button, Message, Form, Grid } from 'semantic-ui-react';
import styled from 'styled-components';

const StyledFoodInput = styled(Input)`
  display: block !important;
  padding-bottom: 1em;
`;


const StyledHeader = styled(Message.Header)`
  margin-bottom: .75em !important;
  font-size: 1.5em !important;
`;

export default props =>
  (
    <Grid>


      <Grid.Row centered>
        <Grid.Column width={8}>
          <Message info>
            <StyledHeader> Note </StyledHeader>
            <Message.Content> When adding a new food, make sure that your macronutrients all add up correctly to the amount of calories </Message.Content>
            <Message.List items={[
              'Carbohydrates and proteins are 4 calories per gram, fat is 9 calories per gram.',
              'Example: A small apple has 14 grams of carbohydrates, .3 grams of protein, and .2g of fat.',
              'To calculate the total amount of calories: (14 * 4) + (.3 * 4) + (.2 * 9) = 59 calories.'
            ]}
            />
          </Message>
          <Form onSubmit={props.addFood}>
            <label htmlFor="name">
              <StyledFoodInput id="name" type="text" name="name" placeholder="Name" />
            </label>
            <label htmlFor="servingSize">
              <StyledFoodInput id="servingSize" type="text" name="servingSize" placeholder="Serving Size (eg: 1/2 cup)" />
            </label>


            <label htmlFor="calories">
              <StyledFoodInput id="calories" type="number" name="calories" placeholder="Calories" />
            </label>


            <label htmlFor="carbs">
              <StyledFoodInput id="carbs" type="number" name="carbs" placeholder="Carbs" />
            </label>

            <label htmlFor="protein">
              <StyledFoodInput id="protein" type="number" name="protein" placeholder="Protein" />
            </label>

            <label htmlFor="fat">
              <StyledFoodInput id="fat" type="number" name="fat" placeholder="Fat" />
            </label>

            <Button primary content="Add Food" type="submit" />
          </Form >
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );

