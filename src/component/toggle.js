import {ThemeContext} from "./themeContext";
import React from 'react'

export const Toggle = () => {
    const { theme, setTheme } = React.useContext(ThemeContext)

    function isDark() {
        return theme === "dark"
    }

    return (
        <label>
            <input
                type="checkbox"
                checked={isDark()}
                onChange={e => setTheme(e.target.checked ? "dark" : "light")}
            ></input>
            <span className="text-accent">Dark Mode</span>
        </label>
    )
}