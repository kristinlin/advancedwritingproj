import React from "react";
import "./css/home.css";
import "./css/section.css";
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div className="home">
            <h1 className="homeTitle">The Future Of Chinatown</h1>
            <div className="Links">
            <Link to="1" className="section-link"><h1><span className="partName">1  </span> AN OFFLINE BUBBLE</h1></Link>
            <Link to="2" className="section-link"><h1><span className="partName">2 </span> AN OFFLINE BUBBLE</h1></Link>       
            </div>    
        </div>
    );
}

export default Home;