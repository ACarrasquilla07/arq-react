import React, { useState } from 'react';

/**
 * Componente con el estado interno usando el hook de react
 * 
 * @see https://reactjs.org/docs/hooks-state.html
 * 
 */
export default () => {
   const [count, setCount] = useState(0);

   function handleClick(count){
    //TODO: usar el metodo setCount para incrementar el valor count
   }

   return (
     <div>
       <p>You clicked {count} times</p>
       <button onClick={() => handleClick(count)}>
         Click me
       </button>
     </div>
   );
}
