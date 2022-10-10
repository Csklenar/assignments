import React, {useContext} from "react"
import UglyThing from "./UglyThing"
import {ListContext} from "./ListContext"

/*In order to use context we need to import it as well as our listContext so that 
we can pass it into our new list of things */
function List(props) {

    const {things} = useContext(ListContext)
    
    return (
        <div>
            
            {things.map((item, index) => 
                <UglyThing 
                {...item}
                key={index}
                />
                )}
                
                
            {/* rendering List of Things */}
        </div>
    )
}

export default List;