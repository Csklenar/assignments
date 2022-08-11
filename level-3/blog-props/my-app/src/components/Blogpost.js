import React from "react"

export default function Blogpost(props) {
    return (
        <div className="main">
            <div className="main-titles">
                <h2 className="main-title">{props.title}</h2>
                <h3 className="main-subtitle">{props.subTitle}</h3>
            </div>
            <p className="main-paragraph">Posted by<span className="main-author"> {props.author}</span> {props.date}</p>
            <hr class="main-underline"/>
        </div>
    )
}