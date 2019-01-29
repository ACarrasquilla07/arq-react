import React, { useState, useEffect } from 'react';

/**
 * Componente con el estado interno usando el hook de react y usando el effect para manajer el lifecycle del componente
 * 
 * La funcion useEffect es usado para remplazar los metodos componentDidMount, componentDidUpdate, y componentWillUnmount combinados.
 * 
 * @see https://reactjs.org/docs/hooks-effect.html
 * 
 */
export default () => {
  //TODO: agregar la funcion "setIsOnline" para setiar el valor
  const [isOnline] = useState(null);
  useEffect(() => {
    let timer1 = setTimeout(() => {
      //TODO: colocar el estado online en verdadero
    }, 1000)
    return () => {
      //TODO: usar la funcion clearTimeout para limbiar el timeout
    }
  },
  [] //useEffect will run only one time
  );

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}
