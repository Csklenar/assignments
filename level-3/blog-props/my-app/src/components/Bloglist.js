import React from "react"
import Blogpost from "./Blogpost"
import Data from "./Data"

export default function Bloglist() {
    const blogElements = Data.map((item, index) => {
    return (
      <Blogpost
      key={index}
      title={item.title}
      subTitle={item.subTitle}
      author={item.author}
      date={item.date}
      />
    )
  })
    return (
        <div>
            {blogElements}
        </div>
    )
}