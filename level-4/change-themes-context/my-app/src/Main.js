import React, {useContext} from "react"
import {ThemeContext} from "./themeContext"

export default function Main(props) {
    const {color, toggleTheme} = useContext(ThemeContext)
    return (
        <>
        <div className={`${color}-theme`} style={{height: "500px"}}>
            <h1 className="main--header">Click the dropdown menu to change the theme of the page</h1>
            
            <div className="main--dropdown--wrapper">
            <select onChange={toggleTheme} className="main--select--options">
                <option value="">Light Theme </option>
                <option selected value="">Dark Theme </option>
            </select>
            </div>
        </div>
        </>
    )
}