import React from 'react';
import { Input, Button, Image, List, Form } from 'semantic-ui-react';

export default props => (
  <div>
    <form onSubmit={props.searchingDatabase}>

      <Input type="text" action={{ icon: 'search' }} name="q" placeholder="Search food..." />

    </form>

    <List divided verticalAlign="middle">


      {props.diary.databaseQuery && props.diary.databaseQuery.map(item => (
        <List.Item key={item.ndbno}>
          <Form onSubmit={e => props.addingFoodToDbDiary(e, item.ndbno, item.name)}>
            <List.Content>
              {item.name}
            </List.Content>
            <List.Content>
              <Input type="number" name="qty" step="1" placeholder="# of servings..." />
            </List.Content>

            <List.Content floated="right">
              <Button content="Add Food" type="submit" />
            </List.Content>

          </Form>
        </List.Item>

      ))


      }

    </List>


  </div>
);
