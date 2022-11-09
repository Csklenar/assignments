import React from "react";
import {Link} from "react-router-dom";

export default function SecondNavbar() {

 

    return (
        <div className="second-navbar-wrapper">
            <Link className="second-nav-items" to='/' >
              Home
          </Link>
          <Link className="second-nav-items" to='/animals' >
            Animals
          </Link>
          <Link className="second-nav-items" to='/contact' >
            Contact
          </Link>
        </div>
    )
}