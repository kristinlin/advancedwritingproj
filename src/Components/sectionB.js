import React from "react";
import "./css/section.css";
import { Link } from "react-router-dom";

export const SectionB = () => {
    return (
        <div className="section">
            <div className="part">
            <span>Part Two</span>
            <h1>SOMETHING</h1>
            </div>

            <div className="img">
                <img src="images/part2.gif"></img>
            </div>

            <div className="row">
                <div className="audio mt-5">                    
                    <audio controls src="audio/curious_bg.wav">
                        Your browser does not support the <code>audio</code> element.
                    </audio>
                </div>
                <div className="mt-5 col-12 col-lg-6 ps-5">
                    <div className="quote">
                    Some of the businesses that people frequent fly almost completely off the radar of Google, Yelp, and social media platforms.
                   
                    </div>
                </div>
                <div className="mt-5 col-12 col-lg-6">
                    <div className="text">
                    When it became clear the neighborhood was impacted heavily by covid, social media initiatives were created by younger generation Chinese Americans to raise money and awareness for struggling small businesses. Two such organizations are Welcome To Chinatown and Send Chinatown Love. Both have found roles as intermediaries, connecting wider audiences online to Chinatown’s small businesses. Beyond just providing options for online audiences to send donations and social media coverage, they offer pro-bono services like marketing to help Chinatown businesses modernize. Send Chinatown Love’s website features one particular testimonial from Tonii’s Fresh Rice Noodle, whose owner, Lizzy Yee, has been able to learn how to create a website and maintain it. Many of the volunteers who are contributing are younger Asian Americans using their skills in marketing, business finances, web development, and other areas to give back to their community. Because many older Chinatown store-owners have been skeptical of modern change, both social media initiatives are embracing a strategy of connecting through in-person conversation in their spaces. Not only does it reinforces a feeling of community and resilience in the face of change, but it encourages a sustainable transition that still feels authentic to Chinatown. Welcome To Chinatown and Send Chinatown Love have made a direct difference in keeping small businesses open and encouraging them to get online.
                    </div>
                    <br/>
                    <div className="text">
                    While social media and donations have supported Chinatown’s shops, the audience that online efforts can be of completely different background to people in the community. Many of the mom-and-pop shops in Chinatown have found their way to social media and online marketing through the skills of their children. One such restaurant is Oriental Garden on 14 Elizabeth Street. Cynthia Koo, a 30-year-old designer, is the daughter of the owners, and before the pandemic even started, she has helped them start an Instagram profile and website. The goal was to not only reach more customers but also to create a more welcoming space for customers who spoke English. Customers online can easily browse menu items accompanied by images that turn foreign-sounding dishes into something more approachable. The aim to reach a wider, English-speaking crowd seems to be a theme of most social media and online efforts. 
                    </div>
                </div>
               
            </div>

            <div className="row"> 
                <div className="col prev">
                <Link to="/1"><i class="next-link bi bi-arrow-left-circle"></i></Link>
                </div>
                <div className="col next">
                <Link to="/3"><i class="next-link bi bi-arrow-right-circle"></i></Link>
                </div>
            </div>
        </div>
    );
}

export default SectionB;