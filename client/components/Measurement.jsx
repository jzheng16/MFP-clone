import React from 'react';


export default ({ measurement, updateMeasurement }) => {
  console.log('exists? ', measurement);
  return (
    <div>
      <button onClick={updateMeasurement}> Update </button>
    </div>
  );
};

