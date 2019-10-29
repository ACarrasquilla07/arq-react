import React from 'react';
import { fromJS } from 'immutable';

export const GlobalContext = React.createContext({
  todos: [],
  lista: fromJS([]),
  formLogin: {
    fields: {
      usuario: { value: '', error: '' },
      clave: { value: '', error: '' },
      telefono: { value: '', error: 'Debes ingresar este campo' },
    },
  },
});

export default GlobalContext;
