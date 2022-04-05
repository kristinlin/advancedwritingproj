import React from "react";
import "./css/header.css";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <div className="header">
       <Link to="/"><i class="header-link bi bi-building"></i></Link>
        </div>
    );
}

export default Header;