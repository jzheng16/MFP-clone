import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import moment from 'moment';
import styled from 'styled-components';
import Select from 'react-select';

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


const GroupedOptions = [
  { label: 'Measurements', options: MeasurementOptions },
  { label: 'Macros', options: MacroOptions },
];

export default ({ measurement, changeGraph, updateMeasurement, display }) => {
  const {
    weight, calorie, carbs, arm, fat, neck, protein, waist, thigh, hips
  } = measurement;

  const today = moment().format('MM-DD');

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
            {weight && today !== moment.unix(weight[weight.length - 1].date).format('MM-DD') ?
              <CheckInTableRow>
                <CheckInTableData>Weight</CheckInTableData>
                <CheckInTableData><input id="weight" type="number" name="weight" /></CheckInTableData>
                <CheckInTableData>{weight ? weight[weight.length - 1].value : 'None'} </CheckInTableData>
                <CheckInTableData>{weight ? moment.unix(weight[weight.length - 1].date).fromNow() : 'Never'}</CheckInTableData>
              </CheckInTableRow>
              :
              <CheckInTableRow>
                <CheckInTableData>Weight</CheckInTableData>
                <CheckInTableData><input disabled id="weight" type="number" name="weight" /></CheckInTableData>
                <CheckInTableData>{weight ? weight[weight.length - 1].value : 'None'} </CheckInTableData>
                <CheckInTableData>{weight ? moment.unix(weight[weight.length - 1].date).fromNow() : 'Never'}</CheckInTableData>
              </CheckInTableRow>
            }
            {arm && today !== moment.unix(arm[arm.length - 1].date).format('MM-DD') ?
              <CheckInTableRow>
                <CheckInTableData>Arm</CheckInTableData>
                <CheckInTableData><input id="arm" type="number" name="arm" /></CheckInTableData>
                <CheckInTableData>{arm ? arm[arm.length - 1].value : 'None'} </CheckInTableData>
                <CheckInTableData>{arm ? moment.unix(arm[arm.length - 1].date).fromNow() : 'Never'}</CheckInTableData>
                <CheckInTableData>{console.log(today, moment.unix(arm[arm.length - 1].date).format('MM-DD'))}
                </CheckInTableData>
              </CheckInTableRow>
              :
              <CheckInTableRow>
                <CheckInTableData>Arm</CheckInTableData>
                <CheckInTableData><input disabled id="arm" type="number" name="arm" /></CheckInTableData>
                <CheckInTableData>{arm ? arm[arm.length - 1].value : 'None'} </CheckInTableData>
                <CheckInTableData>{arm ? moment.unix(arm[arm.length - 1].date).fromNow() : 'Never'}</CheckInTableData>
              </CheckInTableRow>
            }
            {waist && today !== moment.unix(waist[waist.length - 1].date).format('MM-DD') ?
              <CheckInTableRow>
                <CheckInTableData>Waist</CheckInTableData>
                <CheckInTableData><input id="waist" type="number" name="waist" /></CheckInTableData>
                <CheckInTableData>{waist ? waist[waist.length - 1].value : 'None'} </CheckInTableData>
                <CheckInTableData>{waist ? moment.unix(waist[waist.length - 1].date).fromNow() : 'Never'}</CheckInTableData>
              </CheckInTableRow>
              :
              <CheckInTableRow>
                <CheckInTableData>Waist</CheckInTableData>
                <CheckInTableData><input disabled id="waist" type="number" name="waist" /></CheckInTableData>
                <CheckInTableData>{waist ? waist[waist.length - 1].value : 'None'} </CheckInTableData>
                <CheckInTableData>{waist ? moment.unix(waist[waist.length - 1].date).fromNow() : 'Never'}</CheckInTableData>
              </CheckInTableRow>
            }
            {neck && today !== moment.unix(neck[neck.length - 1].date).format('MM-DD') ?
              <CheckInTableRow>
                <CheckInTableData>Neck</CheckInTableData>
                <CheckInTableData><input id="neck" type="number" name="neck" /></CheckInTableData>
                <CheckInTableData>{neck ? neck[neck.length - 1].value : 'None'} </CheckInTableData>
                <CheckInTableData>{neck ? moment.unix(neck[neck.length - 1].date).fromNow() : 'Never'}</CheckInTableData>
              </CheckInTableRow>
              :
              <CheckInTableRow>
                <CheckInTableData>Neck</CheckInTableData>
                <CheckInTableData><input disabled id="neck" type="number" name="neck" /></CheckInTableData>
                <CheckInTableData>{neck ? neck[neck.length - 1].value : 'None'} </CheckInTableData>
                <CheckInTableData>{neck ? moment.unix(neck[neck.length - 1].date).fromNow() : 'Never'}</CheckInTableData>
              </CheckInTableRow>
            }
            {hips && today !== moment.unix(hips[hips.length - 1].date).format('MM-DD') ?
              <CheckInTableRow>
                <CheckInTableData>Hips</CheckInTableData>
                <CheckInTableData><input id="hips" type="number" name="hips" /></CheckInTableData>
                <CheckInTableData>{hips ? hips[hips.length - 1].value : 'None'} </CheckInTableData>
                <CheckInTableData>{hips ? moment.unix(hips[hips.length - 1].date).fromNow() : 'Never'}</CheckInTableData>
              </CheckInTableRow>
              :
              <CheckInTableRow>
                <CheckInTableData>Hips</CheckInTableData>
                <CheckInTableData><input disabled id="hips" type="number" name="hips" /></CheckInTableData>
                <CheckInTableData>{hips ? hips[hips.length - 1].value : 'None'} </CheckInTableData>
                <CheckInTableData>{hips ? moment.unix(hips[hips.length - 1].date).fromNow() : 'Never'}</CheckInTableData>
              </CheckInTableRow>
            }
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

