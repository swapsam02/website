import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <div className="nav">
            <ul>
                <li><NavLink to="/" active="active" exact>Home</NavLink></li>
                <li><NavLink to="/about" active="active" exact>About</NavLink></li>
                <li><NavLink to="/service" active="active" exact>Services</NavLink></li>
                <li><NavLink to="/contact" active="active" exact>Contact</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;