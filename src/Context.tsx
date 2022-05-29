import { ReactElement, useState } from 'react';
import React from 'react';
type Theme = 'light' | 'dark';
// export const ThemeContext = React.createContext()
export const ThemeContext = React.createContext<Theme>('light');
export function ThemeProvider(props: {
    theme: Theme;
    children: ReactElement;
}) {
    return (
        <ThemeContext.Provider value={props.theme}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export function useTheme(): Theme {
    return React.useContext(ThemeContext)
}
