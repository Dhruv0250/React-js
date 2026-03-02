import React, { createContext, useContext } from "react";

const ThemeContext=createContext({
    ThemeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
});

export const ThemeProvider= ThemeContext.Provider

export default function UseTheme(){
    return useContext(ThemeContext)
}