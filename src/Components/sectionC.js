import React from "react";
import "./css/section.css";
import { Link } from "react-router-dom";

export const SectionC = () => {
    return (
        <div className="section">
            <div className="part">
            <span>Part Three</span>
            <h1>TRADE OFFS</h1>
            </div>

            <div className="img">
                <img src="images/part3.gif"></img>
            </div>

            <div className="row">
                <div className="audio mt-5">                    
                    <audio controls src="audio/curious_bg.wav">
                        Your browser does not support the <code>audio</code> element.
                    </audio>
                </div>
               
                <div className="mt-5 col-12 col-lg-6">
                    <div className="text">
                    While the goal is to always gain more customers, tapping into an English-speaking audience could be linked to more tourism and gentrification. 
                    Even before widespread online foodie culture, many Chinatown restaurant fixtures, Joe’s Shanghai, Peking Duck House, and Vanessa’s Dumplings 
                    have become well-known and successful by tapping into a white New York audience. They have found their way onto “Top Chinatown restaurants” lists online. 
                    Today, they remain more well known as popular tourist Chinese restaurants as opposed to go-to spots for locals. While transforming restaurants to cater 
                    to English-speaking customers can be linked to longer-term success, it may come at the risk of losing touch with the rest of the community. Many immigrants 
                    have historically gravitated towards ethnic enclaves to escape racism and hold on to the culture of their home country. While attracting American customers 
                    can feel like a step towards assimilation and success, it also may feel like a compromise of safety and space. Chinatown has been losing valuable space from 
                    gentrification. The Lower East Side, an adjacent neighborhood, has been pushing west into Chinatown, and from the east, there is Soho, a well-established, 
                    trendy shopping destination. Gentrifying crowds that invade spaces previously meant for other immigrants create an environment that may feel less authentic.
                    </div>
                    <br/>
                    <div className="text">
                    While some restaurants find themselves in a sweet spot, holding on to their cuisine and finding success with wider American tastes, others are not so fortunate. 
                    For some, embracing modernity has meant compromising authentic culture. The pandemic has seen the <a href="https://supchina.com/2021/04/01/the-end-of-nycs-chinese-banquet-halls/?fbclid=IwAR1PvFYUdbTlPS4R9GpwaZMA5UjKVKO74PkBc5PAubC-wTVO_EPxefzFH48">end of large, communal banquet halls</a> in Chinatown, with Jing Fong’s 
                    closing receiving the most media coverage for its legendary role in the community. Many Chinese immigrants have traditionally used these banquet halls to host 
                    weddings or other celebrations with friends and family. But as it became more difficult to fill seats, a strange phenomenon occurred where banquet halls began 
                    renting these spaces out to exclusive after-parties and raves. 88 Palace, located in a once vibrant mall right underneath the Manhattan Bridge, was one such 
                    banquet hall. During the day, they would serve dim sum and food to customers seated around round tables. At night, there might be a rave. While renting to an 
                    outsider crowd might benefit banquet halls that were trying to profit, it also feels like a betrayal. This is especially difficult when the people that hosted 
                    and attended these parties were simultaneously looking down upon these spaces and taking advantage of them. In an online article published on The Thrillist, 
                    Eliza Dumais writes that these Chinatown banquet halls are “two-star dim sum joints with absolutely nothing going for them,” and James Nevin, a founder of an 
                    art magazine, believes that these places are “not cool, which is why it’s great.” The reality is that there were Chinese immigrants who were still hosting authentic 
                    celebrations in those same restaurants. The perspectives of these gentrifying parties are disrespectful to the people who see these places as safe havens and 
                    reminders of their home culture.
                    </div>
                </div>

                <div className="mt-5 col-12 col-lg-6 ps-5">
                    <div className="quote">While attracting American customers 
                    can feel like a step towards assimilation and success, it also may feel like a compromise of safety and space.
                    </div>
                </div>
               
            </div>

            <div className="row"> 
                <div className="col prev">
                <Link to="/2"><i class="next-link bi bi-arrow-left-circle"></i></Link>
                </div>
                <div className="col next">
                <Link to="/4"><i class="next-link bi bi-arrow-right-circle"></i></Link>
                </div>
            </div>
        </div>
    );
}

export default SectionC;