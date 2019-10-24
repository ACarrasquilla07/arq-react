import React from 'react';
import { fromJS } from 'immutable';

export const GlobalContext = React.createContext({
  todos: [],
  lista: fromJS([]),
  formLogin: {
    fields: {
      usuario: { value: '', error: '' },
      clave: { value: '', error: '' },
    },
  },
});

export default GlobalContext;
