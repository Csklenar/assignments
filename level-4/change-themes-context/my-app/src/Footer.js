import React, {useContext} from "react"
import { ThemeContext } from "./themeContext"

export default function Footer() {
    const {color} = useContext(ThemeContext)
    return (
        <div>
            <h1 className={`${color}-theme`} style={{textAlign: "center"}}>The Amazing Footer</h1>
        </div>
    )
}