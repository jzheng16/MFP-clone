import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import moment from 'moment';


export default ({ measurement, changeGraph, updateMeasurement, display }) => {
  const {
    weight, calorie, carbs, arm, fat, neck, protein, waist
  } = measurement;
  console.log('display:', display);


  return (
    <div>
      <select onChange={changeGraph}>
        <option value="weight">Weight</option>
        <option value="calorie">Calories</option>
        <option value="carbs">Carbohydrates</option>
        <option value="protein">Protein</option>
        <option value="fat">Fat</option>
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
          label={{ value: `${display}`, angle: -90, position: 'insideLeft', offset: -5 }}
          tickSize={7}
          padding={{ left: 0 }}

        />
        <CartesianGrid strokeDasharray="4 4" />
        <Tooltip labelFormatter={date => moment.unix(date).format('MM/DD')} />
        <Legend />
        <Line type="linear" dataKey="value" name={`${display}`} stroke="#8884d8" activeDot={{ r: 8 }} />

      </LineChart>
      <form onSubmit={updateMeasurement}>

        <label htmlFor="weight">
          Weight: <input id="weight" type="number" name="weight" />
        </label>

        <label htmlFor="Arms">
          Arms: <input id="Arms" type="number" name="Arms" />
        </label>
        <label htmlFor="Waist">
          Waist: <input id="Waist" type="number" name="Waist" />
        </label>

        <button type="submit"> Update </button>
      </form >

    </div>
  );
};

