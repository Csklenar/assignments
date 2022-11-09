import React from "react"

export default function Arrows({prevSlide, nextSlide}) {
    // inside the span tags is where the left arrow & right arrow icons will go
    return (
        <div className="arrows">
            <span className="prev" onClick={prevSlide}> </span>
             <span className="next" onClick={nextSlide}> </span>
        </div>
    )
}