import React from 'react';
import styled from 'styled-components';

const ListFoodTable = styled.table`
  table-layout: fixed;  /* Makes table behave more predictably */
  width: 75%;
  border-collapse: collapse; /* Each element by default has a border which doesn't look great, this removes them*/
  border: 1px solid blue; /* size type color */
`;

const ListFoodHeadings = styled.tr`
/* Headings: Name, Calories, Serving Size? */
`;

const StyledTHead1 = styled.th`
  width: 5%;
  
`;
const StyledTHead2 = styled.th`
  width: 40%;
`;
const StyledTHead3 = styled.th`
  width: 40%;
`;
const StyledTHead4 = styled.th`
  width: 55;
`;
const tableBody = styled.tbody`
  text-align: center;
`;

const StyledTableData = styled.td`
  text-align: center;
`;

export default props => {
  const sortedFoods = props.foods.allFoods.sort((a, b) => a.id - b.id);
  return (
    <div>
      <form onSubmit={props.addingFoodToDiary}>
        <ListFoodTable>
          <caption> List of your Foods </caption>
          <thead>
            <ListFoodHeadings>
              <StyledTHead1> </StyledTHead1>
              <StyledTHead2> Name </StyledTHead2>
              <StyledTHead3> Calories </StyledTHead3>
              <StyledTHead4> Serving Size </StyledTHead4>
            </ListFoodHeadings>
          </thead>
          <tbody>
            {sortedFoods && sortedFoods.map(food => (
              <tr key={food.id}>
                <StyledTableData> <input type="checkbox" name="add_checked" value={food.id} onChange={props.onChange} /> </StyledTableData>
                <StyledTableData> {food.name} </StyledTableData>
                <StyledTableData> {food.calories} </StyledTableData>
                <StyledTableData> <input type="number" defaultValue="1" id={food.id} name="qty" /> </StyledTableData>
              </tr>
            ))
            }
          </tbody>
          <tfoot>
            <tr>
              <StyledTableData> <button type="submit"> Add Food to Diary </button> </StyledTableData>
              <StyledTableData> Add Food </StyledTableData>
            </tr>
          </tfoot>
        </ListFoodTable>
      </form>
    </div>
  );
};
