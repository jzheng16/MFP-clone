import React from 'react';

export default props => (
  <div>
    {props.diary.databaseQuery && props.diary.databaseQuery.list ? props.diary.databaseQuery.list.item.map(item => (
      <ul>
        <li key={item.ndbno}> {item.name} </li>
        {/* <li> {item.group} </li> */}

        <button onClick={() => console.log(item.ndbno)}> Add Foood </button>
      </ul>

    ))
      : null
    }
  </div>
);
