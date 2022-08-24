// #1

import React from "react"

export default function ChangeColorH1() {
        const [color, setColor] = React.useState("pink")
            
        function handleClick() {
            setColor("red")
        }
        
    return (
        <div className="main">
            <h1 className="main-title" style={{color: color}}>Change the Color</h1>
            <button className="main-btn" onClick={handleClick}>Click me</button>
           
        </div>
    )
}

// #2
export default function useState() {
    const [color, setColor] = React.useState("pink")
    
    function changeColor() {
        setColor(prevState => prevState==="blue" ? "pink" : "blue")
        
    }
   return (
    <div>
        <h1 style={{color: color}}>What is my color?</h1>
        <button onClick={changeColor}>Click Me</button>
    </div>
   )
}

//#3

/* Add a new person object to the following people array in state. 
You can hard-code a new object but it must be a person object with 
firstName and lastName properties. */

export default function useState() {
    const [people, setPeople] = React.useState([
	{
		firstName: "John",
		lastName: "Smith"
	}, 
    ]
)

function newPerson() {
    setPeople(prevPeople => {
        return [ // return array
                ...prevPeople,
                {
                  firstName: "Corey",
                  lastName: "Sklenar"
                }
            ]
        }
        )
        console.log(people)
}

return (
    <div>
        <h1 className="main-title">{people.firstName} {people.lastName}</h1>
        <button className="main-btn" onClick={newPerson}>Click Me</button>
    </div>
)

}

// #4
// problem a
const [colors, setColors] = React.setState(["pink", "blue"])

setColors(prevColors =>  [...prevColors, "green"])

// problem b
const [countObject, setCountObject] = setState({
	count: 0
})

setCountObject(prevState=> {{
		count: prevState.count + 1
	}
})

// #5
/*Update the following state to add an additional property age and set the value to 30, 
ensuring that the other properties are not overwritten. */
const [person, setPerson] = useState({
		firstName: "John",
		lastName: "Smith"
})

function addAge() {
    setPerson(prevPerson => {
        return {
            ...prevPerson,
            prevPerson.firstName,
            prevPerson.lastName,
            age: 30;
            
        }
    })

}


// #6

// const [colors, setColors] = useState(["pink", "blue"])

// setColors("green")

// you need to have a ternary operator as well as you need to spread the value green into the array