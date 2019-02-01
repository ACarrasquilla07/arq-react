
import React, { useState } from "react";
import { ThemeContext, themes } from "../context/theme";
import Botton from "../components/Botton";

//TODO: Crear el componente Input con base al componente Botton
import Input from "../components/Input";

export default () => {
    const [myTheme, setMyTheme] = useState(themes.dark);
    function toggleTheme() {
        setMyTheme(myTheme === themes.dark
            ? themes.light
            : themes.dark);
    }
    //TODO: agregar el valor del contexto en el provider del contexto (<ThemeContext.Provider value=...)
    return (
        <ThemeContext.Provider >
            <Botton onClick={toggleTheme}>
                Change me here!!
            </Botton> <br />
            <Input defaultValue={JSON.stringify(myTheme)} size={100}/>
        </ThemeContext.Provider>
    );
}