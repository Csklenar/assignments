import React, {useState, useEffect} from "react"
import Inventory from "./components/Inventory.js"
import AddInventoryForm from "./components/AddInventoryForm.js"
import axios from "axios"
import './App.css';

function App() {
  const [inventory, setInventory] = useState([])

function getInventory()  {

    axios.get("/inventory")
    .then(res => setInventory(res.data))
    .catch(err => console.log(err))
  }

  const addInventory = (newInventory) => {
    console.log(newInventory)
    axios.post("/inventory", newInventory)
    .then(res => {
      setInventory(prevInventory => [...prevInventory, res.data])
    })
    .catch(err => console.log(err))
  }

  const deleteInventory = (inventoryId) => {
    axios.delete(`/inventory/${inventoryId}`)
    .then(res => {
      setInventory(prevInventory => prevInventory.filter(item => item._id !== inventoryId))
    })
    .catch(err => console.log(err))
  }

  const editInventory = (updates, inventoryId) => {
    axios.put(`/inventory/${inventoryId}`, updates)
    .then(res => {
      setInventory(prevInventory => prevInventory.map(item => item._id !== inventoryId ? item : res.data))
    })
    .catch(err => console.log(err))
  }

  const handleFilter = (e) => {
    if(e.target.value === "reset"){
      getInventory()
    } else {
      axios.get(`/inventory/search/toppings?toppings=${e.target.value}`)
      .then(res => setInventory(res.data))
      .catch(err => console.log(err))
    }
  }

  useEffect(() => {
    getInventory()
  }, [])
  
  return (
    <div className="inventory-container">
      <AddInventoryForm 
      submit={addInventory}
      btnText="Add Item"
      />

      <h4>Filter by Item</h4>
      <select onChange={handleFilter} className="filter-form">
          <option value="reset">All Items</option> 
          <option value="toppings">Toppings</option> 
          <option value="crust">Crust</option> 
          <option value="size">Size</option> 
      </select>
      {
        inventory.map(inventory=> 
        <Inventory 
        {...inventory}
        key={inventory.toppings}
        deleteInventory={deleteInventory}
        editInventory={editInventory}
        />)
      }
    </div>
  );
}

export default App;
