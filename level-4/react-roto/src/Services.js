import React from "react"
import {useNavigate, Link} from "react-router-dom"
import servicesData from "./ServicesData"

export default function Services() {
    const services = servicesData.map(services => (
        <h3 key={services._id}>
            <Link to={`/services/${services._id}`}>{services.name}</Link> - ${services.price}
        </h3>
    ))
    return (
        <div>
            {/* <h2 className="services-title">Drain Cleaning</h2>
            <div className="product-1">
            <img src="https://bit.ly/3D5C2gA" className="services-product-img"/>
            </div> */}

            <div className="services-items">
                <h1 className="services-header">LIST OF SERVICES</h1>
                <a className="services-list">{services}</a>
            </div>
        </div>
    )
}