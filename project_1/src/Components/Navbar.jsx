import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <div>logo</div>
        <div>
            <NavLink to={home}>
            Home

            </NavLink>
        </div>
    </div>
  )
}

export default Navbar