import React from "react";
/**
 * Manage del contexto, definir todos atributos del contexto
 * 
 * @see https://reactjs.org/docs/context.html
 * 
 */

//TODO: completar los valores de los colores
export const themes = {
  light: {
    foreground: "", //agregar un valor foreground para ligth
    background: "",//agregar un valor background para ligth
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

export const ThemeContext = React.createContext(
  themes.dark // default value
);