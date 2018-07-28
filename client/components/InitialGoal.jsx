import React from 'react';

export default props => {
  console.log('props', props);

  return (
    <button onClick={props.updatingGoal}> Hello </button>
  );
};
