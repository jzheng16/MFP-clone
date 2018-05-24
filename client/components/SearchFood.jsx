import React from 'react';

export default props => (
  <form onSubmit={props.searchingDatabase}>
    <input type="text" name="q" placeholder="Search a food..." />
    <button type="submit"> Submit </button>
  </form>
);
