import React from 'react';

export default props => {
  console.log(props);
  return (
    <div>
      {props.diary.databaseQuery && props.diary.databaseQuery.list ? props.diary.databaseQuery.list.item.map(item => (
        <li key={item.ndbno}> {item.name}
          <form onSubmit={e => props.addingFoodToDatabaseDiary(e, item.ndbno)}>
            <label htmlFor="qty"> Qty
              <input type="number" defaultValue="1" name="qty" />
            </label>
            <button type="submit"> Add Food </button>
          </form>
        </li>


      ))
        : null
      }
    </div>
  );
};
