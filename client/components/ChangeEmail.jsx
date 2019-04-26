import React from 'react';
import styled from 'styled-components';


const ChangeEmail = props => (
  <form onSubmit={props.changingEmail}>
    <label htmlFor="email"> New Email:
       <input type="email" name="email" />
    </label>
    <button type="submit"> Change </button>
  </form>
);




// export default props => (
//   <form onSubmit={props.changingEmail}>
//     <label htmlFor="email"> New Email:
//       <input type="email" name="email" />
//     </label>
//     <button type="submit"> Change </button>
//   </form>
// );
