import React, {useState, useEffect} from "react"
import Bounty from "./components/Bounty.js"
import AddBountyForm from "./components/AddBountyForm.js"
import './App.css';
import axios from "axios"

function App() {
  const [bounties, setBounties] = useState([])

  function getBounties() {
    axios.get("/bounty")
      .then(res => setBounties(res.data))
      .catch(err => console.log(err))
  }

  function addBounty(newBounty) {
    axios.post("/bounty", newBounty)
      .then(res => {
        setBounties(prevBounties => [...prevBounties, res.data])
      })
      .catch(err => console.log(err))
  }

  function deleteBounty(bountyId) {
    axios.delete(`/bounty/${bountyId}`)
      .then(res => {
        setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
      })
      .catch(err => console.log(err))
  }

  function editBounty(updates, bountyId) {
    axios.put(`/bounty/${bountyId}`, updates)
    .then(res => {
      setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data))
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getBounties()
  }, [])

  return (
    <div className="bounties-container">
      <AddBountyForm 
      submit={addBounty}
      btnText="Add Bounty"
      />

      { bounties.map(bounty => 
      <Bounty 
      {...bounty} 
      key={bounty.firstName} 
      deleteBounty={deleteBounty}
      editBounty={editBounty}
      />
      )}
    </div>
  );
}

export default App;
