import React from "react";
import "./css/section.css";
import { Link } from "react-router-dom";

export const SectionD = () => {
    return (
        <div className="section">
            <div className="part">
            <span>Part Four</span>
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
                    In response to a changing neighborhood, the W.O.W. Project was started by Mei Lum to protect and grow Chinatown’s culture through the arts and activism. Their use of social media and the internet as a means of generating engagement and building community is one ongoing example of means for Chinatown to evolve. Lum is a 5th generation owner of Wing On Wo & Co on Mott St., a general store in Chinatown that has been around since 1925. When Lum learned that her grandmother was thinking about selling the store in 2016, she decided to forgo graduate school to take over the store instead. As a younger owner, Lum’s goal is to seed relationships to resolve generational gaps. Lum has decided to not only continue to sell specialty goods but also use her space to host conversations and start programs like an artist residency. While many of the events are in-person, the W.O.W. project maintains a social media account and website that brings visibility to the work that is being done. Unlike just seeking English-speaking customers, the W.O.W. project has a different audience. Following the Chinatown spirit of immigrants helping other immigrants, the audience that the W.O.W. project seeks to connect to is people from Chinatown or people who have lived in Chinatown in the past. The W.O.W. project also breaks new ground and recognizes that Chinatown has been built primarily on patriarchial systems. As a women, non-binary, queer, trans-led initiative, the W.O.W. project is interested in connecting to groups that may have previously felt invisible. Mei Lum’s work of connecting to a younger generation in Chinatown and building community is vital to sustaining a neighborhood that is being displaced and sieged by gentrification.
                    </div>
                    <br/>
                    <div className="text">
                    Chinatown has long been a community that has felt like home for many Chinese immigrants, clinging tightly to old ways and traditions. But as gentrification threatens its vitality, efforts to embrace modernity and social media have risen in response. Whether or not these changes may bring about a better Chinatown or compromise its authenticity is difficult to say. The future of Chinatown rests on creating sustainable businesses and connecting to a younger generation.
                    </div>
                </div>
               
            </div>

            <div className="row"> 
                <div className="col prev">
                <Link to="/3"><i class="next-link bi bi-arrow-left-circle"></i></Link>
                </div>
            </div>
        </div>
    );
}

export default SectionD;