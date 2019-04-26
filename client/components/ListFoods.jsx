import React from 'react';
import styled from 'styled-components';
import { Table, Button, Input } from 'semantic-ui-react';

const StyledQuantityInput = styled.input`
  display: block;
  outline: none;
  &&&& {
 
    font-size: 1.2em;
    border: 1px solid #d9d9d9;
    border-radius: 0;
    padding: 10px 15px;
    margin: .5em 0 .5em 0;
   
    
    &:hover{
     box-shadow: inset 1px 2px 8px rgba(0, 0, 0, 0.02);
    };

    &:focus{
    border: 1px solid #33b5e5;
    color: #333333;
    box-shadow: inset 1px 2px 4px rgba(0, 0, 0, 0.01), 0px 0px 8px rgba(0, 0, 0, 0.2);
    } 
  }
`;


export default props => {
  const sortedFoods = props.foods.allFoods.sort((a, b) => a.id - b.id);
  return (
    <div>
      <form onSubmit={props.addingFoodToDiary}>
        <Table color="blue" striped celled fixed singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={1} />
              <Table.HeaderCell width={6}>Name</Table.HeaderCell>
              <Table.HeaderCell width={3}>Calories</Table.HeaderCell>
              <Table.HeaderCell width={3}>Serving Size</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {sortedFoods && sortedFoods.map(food => (
              <Table.Row key={food.id}>
                <Table.Cell collapsing> <Input type="checkbox" name="add_checked" value={food.id} onChange={props.onChange} size="small" /> </Table.Cell>
                <Table.Cell> {food.name} </Table.Cell>
                <Table.Cell> {food.calories} </Table.Cell>
                <Table.Cell> <StyledQuantityInput placeholder="hi" type="number" defaultValue="1" data-name={food.name} id={food.id} name="qty" size="small" /> </Table.Cell>
              </Table.Row>
            ))
            }
          </Table.Body>
          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan="4">
                <Button content="Add Checked Foods to Diary" icon="add" labelPosition="left" primary size="small" />
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </form>
    </div>
  );
};
