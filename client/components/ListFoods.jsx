import React from 'react';
import styled from 'styled-components';
import { Table, Button, Input } from 'semantic-ui-react';

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
                <Table.Cell> <Input type="number" defaultValue="1" foodname={food.name} id={food.id} name="qty" size="small" /> </Table.Cell>
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
