import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <>
            <NavLink exact activeClassName="active-class" to="/"> About us </NavLink>
            <NavLink exact activeClassName="active-class" to="/contact"> Contact </NavLink>
        </>
    );
}

export default Navbar