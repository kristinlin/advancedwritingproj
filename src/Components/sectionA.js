import React from "react";
import { Link } from "react-router-dom";
import "./css/section.css";

export const SectionA = () => {
    return (
        <div className="section">
            <div className="part">
            <span>Part One</span>
            <h1>AN OFFLINE BUBBLE</h1>
            </div>

            <div className="img">
                <img src="images/part1.gif" alt="collage"></img>
            </div>

            <div className="row">
                <div className="audio mt-5">                    
                    <audio controls src="audio/curious_bg.wav">
                        Your browser does not support the <code>audio</code> element.
                    </audio>
                </div>

                <div className="mt-5 col-12 col-lg-6">
                    <div className="text">
                    In a chunk of prime real estate in lower Manhattan, first-generation immigrants, like my grandparents, can live decades in the United States and still know less than thirty words of English. Chinese immigrants have built from scratch a network that has created jobs and services to support other Chinese immigrants. The immigrant network can be both an source of comfort and a bubble. Relying on relationships and word-of-mouth, Chinatown has been a technological desert. Many of the businesses that people frequent fly off the radar of Google, Yelp, and social media platforms. But as more families are displaced and gentrification continues, the offline network that has sustained generations is shrinking. The coronavirus pandemic has sped up many of these changes. During the height of the pandemic, social media activism helped support Chinatown businesses through donations and encouragement to order more takeout or buy gift cards. Chinatown is changing rapidly, from both inevitable and preventable causes, but the efforts that many are making through social media and embracing modernity are transforming key small businesses into something hopefully more sustainable while also questioning our understanding of authenticity.
                    </div>
                    <br/>
                    <div className="text">
                    The coronavirus pandemic highlighted a necessity for Chinatown’s small businesses to expand their reach online in an effort to sustain themselves. Over the last two decades, Chinatown has been experiencing a demographic change amidst gentrification. Younger generations and middle-class families are moving out into the outer suburbs and boroughs. Most of the residents in Manhattan’s Chinatown today are middle-aged or seniors. Having lived there for years, they are holding on to their old, established ways. But as the population has shifted, the customer base of many restaurants and mom-and-pop stores have come to include more tourists. However, tourism meant the coronavirus pandemic hit Chinatown particularly hard. With rising xenophobia and restricted travel, Chinatown saw 50% to 80% less foot traffic during the height of the pandemic. Small businesses had many obstacles against them, for many did not have an online presence and struggled with a language barrier. This prevented them from easily accessing resources to get started. Most were unable to supplement their in-store profit or easily accept donations themselves. Businesses that applied for government funds struggled to get accepted because part of Chinatown shares a zip code with Tribeca, one of the wealthiest neighborhoods in Manhattan. This was all occurring in the context of gentrification, which has been threatening Chinatown since 9/11. It seemed that all too quickly, stores in Chinatown were facing shutdown.
                    </div>
                </div>
                <div className="mt-5 col-12 col-lg-6 ps-5">
                    <div className="quote">
                    Some of the businesses that people frequent fly almost completely off the radar of Google, Yelp, and social media platforms.
                   
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col next">
                <Link to="/2"><i className="next-link bi bi-arrow-right-circle"></i></Link>
                </div>
            </div>
        </div>
    );
}

export default SectionA;