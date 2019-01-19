import React from 'react';
import { Input, Button } from 'semantic-ui-react';
import styled from 'styled-components';

const StyledFoodInput = styled(Input)`
  display: block !important;
  padding-bottom: 1em;
`;

export default props =>
  (
    <form onSubmit={props.addFood}>

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
    </form >
  );

