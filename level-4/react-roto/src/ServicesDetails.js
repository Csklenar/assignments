import React from "react"
import {useParams} from "react-router-dom"
import ServicesData from "./ServicesData"

export default function ServicesDetails() {
const {servicesId} = useParams()
const foundServices = ServicesData.find(services => services._id === servicesId)

console.log(useParams())

return (
        
        <div className="services-details-wrapper">
            <h1 className="services-details-header">Service Details Page</h1> {/**params 5 */}
            <h3 className="services-details">{foundServices.name} - ${foundServices.price}</h3> {/**params 5 */}
          
            {/* <p>{foundServices.description}</p>  */}
        </div>
    )
}