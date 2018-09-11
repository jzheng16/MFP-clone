import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import styled from 'styled-components';
import Select from 'react-select';
import { formatDistance, format } from 'date-fns';
import shortid from 'shortid';

const ChartWrapper = styled.div`
  width: 100%;
  margin: auto;

`;

const CheckInWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  
`;

const CheckInTable = styled.table`
 table-layout: auto;
  width: 60%;
  align: left;
  border: 10px solid black;
`;

const CheckInTableRow = styled.tr`
  text-align: center;
`;

const CheckInTableData = styled.td`
  text-align: center;
  background-color: #f6f6f6;
`;

const MacroOptions = [
  { value: 'calorie', label: 'Calorie' },
  { value: 'carbs', label: 'Carbs' },
  { value: 'protein', label: 'Protein' },
  { value: 'fat', label: 'Fat' }
];
const MeasurementOptions = [
  { value: 'weight', label: 'Weight' },
  { value: 'arm', label: 'Arm' },
  { value: 'waist', label: 'Waist' },
  { value: 'neck', label: 'Neck' },
  { value: 'thigh', label: 'Thigh' },
  { value: 'hips', label: 'Hips' }
];

const Measurements = ['weight', 'arm', 'waist', 'neck', 'thigh', 'hips'];


const GroupedOptions = [
  { label: 'Measurements', options: MeasurementOptions },
  { label: 'Macros', options: MacroOptions },
];

export default ({ measurement, changeGraph, updateMeasurement, display }) => {
  const today = format(new Date(), 'MM-dd');

  // TODO: Duplicate code for table data render? Only one row changed for ternary condition
  return (
    <ChartWrapper>
      <Select
        options={GroupedOptions}
        defaultValue={MeasurementOptions[1]}
        onChange={changeGraph}
      />
      <LineChart
        width={600}
        height={300}
        data={measurement[display]}
        type="number"
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis
          dataKey="date"
          tickFormatter={date => format(new Date(date), 'MM-dd')}
        />
        <YAxis
          dataKey="value"
          label={{ value: `${display.charAt(0).toUpperCase() + display.slice(1)}`, angle: -90, position: 'insideLeft', offset: -5 }}
          tickSize={7}
          padding={{ left: 0 }}

        />
        <CartesianGrid strokeDasharray="4 4" />
        <Tooltip labelFormatter={date => format(new Date(date), 'MM-dd')} />
        <Legend />
        <Line type="linear" dataKey="value" name={`${display.charAt(0).toUpperCase() + display.slice(1)}`} stroke="#8884d8" activeDot={{ r: 8 }} />

      </LineChart>

      <form onSubmit={updateMeasurement}>
        <CheckInTable>
          <thead>
            <CheckInTableRow>
              <CheckInTableData>Measurement</CheckInTableData>
              <CheckInTableData>Value</CheckInTableData>
              <CheckInTableData>Last Updated Value</CheckInTableData>
              <CheckInTableData>Last Updated</CheckInTableData>
            </CheckInTableRow>
          </thead>
          <tbody>
            {Object.keys(measurement).map(key => {
              if (Measurements.includes(key) && measurement[key].length > 0) {
                return (
                  measurement[key] && today !== format(measurement[key][measurement[key].length - 1].date, 'MM-dd') ?
                    <CheckInTableRow key={shortid.generate()}>
                      <CheckInTableData>{key.charAt(0).toUpperCase() + key.slice(1)}</CheckInTableData>
                      <CheckInTableData><input id="key" type="number" name={key} /></CheckInTableData>
                      <CheckInTableData>{measurement[key][measurement[key].length - 1].value} </CheckInTableData>
                      <CheckInTableData>{formatDistance(measurement[key][measurement[key].length - 1].date, new Date(), { addSuffix: true })}</CheckInTableData>
                    </CheckInTableRow>
                    :
                    <CheckInTableRow key={shortid.generate()}>
                      <CheckInTableData>{key.charAt(0).toUpperCase() + key.slice(1)}</CheckInTableData>
                      <CheckInTableData><input disabled id="key" type="number" name="key" /></CheckInTableData>
                      <CheckInTableData>{measurement[key][measurement[key].length - 1].value} </CheckInTableData>
                      <CheckInTableData>{formatDistance(measurement[key][measurement[key].length - 1].date, new Date(), { addSuffix: true })}</CheckInTableData>
                    </CheckInTableRow>
                );
              } else if (Measurements.includes(key)) {
                return (
                  <CheckInTableRow key={shortid.generate()}>
                    <CheckInTableData>{key.charAt(0).toUpperCase() + key.slice(1)}</CheckInTableData>
                    <CheckInTableData><input id="key" type="number" name={key} /></CheckInTableData>
                    <CheckInTableData>None </CheckInTableData>
                    <CheckInTableData>Never</CheckInTableData>
                  </CheckInTableRow>
                );
              }
            })}
          </tbody>
          <tfoot>
            <CheckInTableRow>
              {}
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

