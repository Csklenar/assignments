import React, {useContext} from "react"
import {ThemeContext} from "./themeContext"

export default function Navbar(props) {
    const {color} = useContext(ThemeContext)

    return (
        <div className={`${color}-theme`}>
            <ul className="navbar--list">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}