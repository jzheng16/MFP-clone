import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import moment from 'moment';
import styled from 'styled-components';


const ChartWrapper = styled.div`
  width: 100%;
  margin: auto;

`;

const CheckInWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  
`;

const CheckInTable = styled.table`
  width: 60%;
  align: left;
  border: 10px solid black;
`;

const CheckInTableRow = styled.tr`

`;

const CheckInTableData = styled.td`
`;

export default ({ measurement, changeGraph, updateMeasurement, display }) => {
  const {
    weight, calorie, carbs, arm, fat, neck, protein, waist, thigh, hips
  } = measurement;
  console.log('display:', display);

  return (
    <ChartWrapper>
      <select onChange={changeGraph}>
        <option value="weight">Weight</option>
        <option value="calorie">Calories</option>
        <option value="carbs">Carbohydrates</option>
        <option value="protein">Protein</option>

        <option value="fat">Fat</option>
        <option value="arm">Arm</option>
        <option value="waist">Waist</option>
        <option value="neck">Neck</option>
        <option value="thigh">Thigh</option>
        <option value="hips">Hips</option>
      </select>
      <LineChart
        width={600}
        height={300}
        data={measurement[display]}
        type="number"
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis
          dataKey="date"
          tickFormatter={date => moment.unix(date).format('MM/DD')}
        />
        <YAxis
          dataKey="value"
          label={{ value: `${display.charAt(0).toUpperCase() + display.slice(1)}`, angle: -90, position: 'insideLeft', offset: -5 }}
          tickSize={7}
          padding={{ left: 0 }}

        />
        <CartesianGrid strokeDasharray="4 4" />
        <Tooltip labelFormatter={date => moment.unix(date).format('MM/DD')} />
        <Legend />
        <Line type="linear" dataKey="value" name={`${display.charAt(0).toUpperCase() + display.slice(1)}`} stroke="#8884d8" activeDot={{ r: 8 }} />

      </LineChart>

      <form onSubmit={updateMeasurement}>
        <CheckInTable>
          <thead>
            <CheckInTableRow>
              <CheckInTableData> Measurement </CheckInTableData>
              <CheckInTableData> Value </CheckInTableData>
              <CheckInTableData> Last Updated Value  </CheckInTableData>
              <CheckInTableData> Last Updated </CheckInTableData>
            </CheckInTableRow>
          </thead>
          <tbody>
            <CheckInTableRow>
              <CheckInTableData>Weight</CheckInTableData>
              <CheckInTableData><input id="weight" type="number" name="weight" /></CheckInTableData>
              <CheckInTableData>{weight ? weight[weight.length - 1].value : 'None'} </CheckInTableData>
              <CheckInTableData>{weight ? moment.unix(weight[weight.length - 1].date).format('YYYY-MM-DD') : 'None'}</CheckInTableData>
            </CheckInTableRow>
            <CheckInTableRow>
              <CheckInTableData>Arm</CheckInTableData>
              <CheckInTableData><input id="Arm" type="number" name="arm" /></CheckInTableData>
              <CheckInTableData>{arm ? arm[arm.length - 1].value : 'None'} </CheckInTableData>
              <CheckInTableData>{arm ? moment.unix(arm[arm.length - 1].date).format('YYYY-MM-DD') : 'None'}</CheckInTableData>
            </CheckInTableRow>
            <CheckInTableRow>
              <CheckInTableData>Waist</CheckInTableData>
              <CheckInTableData><input id="Waist" type="number" name="waist" /></CheckInTableData>
              <CheckInTableData>{waist ? waist[waist.length - 1].value : 'None'} </CheckInTableData>
              <CheckInTableData>{waist ? moment.unix(waist[waist.length - 1].date).format('YYYY-MM-DD') : 'None'}</CheckInTableData>
            </CheckInTableRow>
            <CheckInTableRow>
              <CheckInTableData>Neck</CheckInTableData>
              <CheckInTableData><input id="Neck" type="number" name="neck" /></CheckInTableData>
              <CheckInTableData>{neck ? neck[neck.length - 1].value : 'None'} </CheckInTableData>
              <CheckInTableData>{neck ? moment.unix(neck[neck.length - 1].date).format('YYYY-MM-DD') : 'None'}</CheckInTableData>
            </CheckInTableRow>
            <CheckInTableRow>
              <CheckInTableData>Thigh</CheckInTableData>
              <CheckInTableData><input id="Thigh" type="number" name="thigh" /></CheckInTableData>
              <CheckInTableData>{thigh ? thigh[thigh.length - 1].value : 'None'} </CheckInTableData>
              <CheckInTableData>{thigh ? moment.unix(thigh[thigh.length - 1].date).format('YYYY-MM-DD') : 'None'}</CheckInTableData>
            </CheckInTableRow>
            <CheckInTableRow>
              <CheckInTableData>Hips</CheckInTableData>
              <CheckInTableData><input id="Hips" type="number" name="hips" /></CheckInTableData>
              <CheckInTableData>{hips ? hips[hips.length - 1].value : 'None'} </CheckInTableData>
              <CheckInTableData>{hips ? moment.unix(hips[hips.length - 1].date).format('YYYY-MM-DD') : 'None'}</CheckInTableData>
            </CheckInTableRow>
          </tbody>
          <tfoot>
            <CheckInTableRow>
              <CheckInTableData> <button type="submit"> Update </button> </CheckInTableData>
              <CheckInTableData>Placeholder for  edit previous entries</CheckInTableData>
              <CheckInTableData>Placeholder</CheckInTableData>
            </CheckInTableRow>
          </tfoot>
        </CheckInTable>

      </form >


    </ChartWrapper>
  );
};

