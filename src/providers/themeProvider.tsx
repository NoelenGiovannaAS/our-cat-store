import { FC, ReactNode, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { ThemeProvider as Theme } from "styled-components";
import { DarkTheme, LightTheme} from '../styles/Theme';
import { GlobalStyle } from '../styles/globalStyles';

interface Props {
    children: ReactNode;
  }
export const ThemeProvider: FC<Props> = ({children}) => {
    const [theme, setTheme] = useState<"light" | "dark">(
        (localStorage.getItem("ui.theme") as "light" | "dark") || "ligth"
    );

    const toggleTheme = (): void => {
        const val = theme === "light" ? "dark" : "light";
        setTheme(val);
        localStorage.setItem("ui.theme", val);
      };

    return(
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <Theme theme={theme === "light" ? LightTheme : DarkTheme }>
              <GlobalStyle />
              {children}
            </Theme>
        </ThemeContext.Provider>
    );

};

export default ThemeProvider;