import React, {useState} from "react"
import axios from "axios"

const ListContext = React.createContext()


function ListProvider(props) {
    const [things, setThings] = useState([
        
    ])

    
    const [editThing, setEditThing] = useState(false)
    


    React.useEffect(() => {
      axios.get("https://api.vschool.io/coreysklenar/thing")
      .then(res => setThings(res.data))
      .catch(err => console.log(err))
    }, [])

   const addNewThing = (item) => {
       axios.post("https://api.vschool.io/coreysklenar/thing", item)
       .then(res => { console.log(res.data)
        // maybe put your fetchData() here
        setThings(prevThings => [...prevThings, res.data])
})
        .catch(error => console.log(error))
    }
    
    const updateThing = (id, uglyThing) => {
        // let id = uglyThing._id
        // let thing = uglyThing.editThing
        axios.put(`https://api.vschool.io/coreysklenar/thing/${id}`, uglyThing)
        .then(setThings(prev => prev.map((thing) => thing._id === id ? {...uglyThing} : thing)))
        .then(res => console.log(res))
        .catch(error => console.log(error))
    }

    const deleteThing = (remove) => {
        let id = remove
        console.log("item was deleted")
        axios.delete(`https://api.vschool.io/coreysklenar/thing/${id}`)
        .then(res => {
            setThings(prevThings => prevThings.filter(thing => thing._id !== id))
            console.log(res)})
        .catch(error => console.log(error))
    }

    //  const editData = (event) => {
    //     const {name, value} = event.target
    // setEditThing(prevThing => !prevThing)
    
    // }

    
    //build functions for the delete and PUT requests
    // make sure to check console and components tab to see how data is being passed
    
    return (
        <ListContext.Provider value={{
            things,
            addNewThing,
            updateThing,
            deleteThing
        }}>
            {props.children}
        </ListContext.Provider>
    )
}

export {ListContext, ListProvider}