import React from "react";
import "./css/home.css";
import "./css/section.css";
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div className="home">
            <h1 className="homeTitle">Futures Of Chinatown</h1>
            <div className="Links">
            <Link to="1" className="section-link"><h1 className="link-title"><span className="partName">01  </span> AN OFFLINE BUBBLE</h1></Link>
            <Link to="2" className="section-link"><h1 className="link-title"><span className="partName">02 </span> DIGITAL INTERMEDIARIES</h1></Link>    
            <Link to="3" className="section-link"><h1 className="link-title"><span className="partName">03 </span> TRADEOFFS</h1></Link>   
            <Link to="4" className="section-link"><h1 className="link-title"><span className="partName">04 </span> SEEDS AND CONVERSATIONS</h1></Link>      
            </div>    
        </div>
    );
}

export default Home;