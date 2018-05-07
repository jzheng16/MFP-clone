const React = require('react');


export default props =>
  (
    <form onSubmit={props.addFood}>
      <div>
        <label htmlFor="name">
          Add a food that you eat: <input id="name" type="text" name="name" />
        </label>
      </div>
      <div>
        <label htmlFor="calories">
          Calories: <input id="calories" type="number" name="calories" />
        </label>
      </div>
      <div>
        <label htmlFor="carbs">
          Carbs: <input id="carbs" type="number" name="carbs" />
        </label>
      </div>
      <div>
        <label htmlFor="protein">
          Protein: <input id="protein" type="number" name="protein" />
        </label>
      </div>
      <div>
        <label htmlFor="fat">
          Fat: <input id="fat" type="number" name="fat" />
        </label>
      </div>
      <button type="submit"> Add Food </button>
    </form >
  );

