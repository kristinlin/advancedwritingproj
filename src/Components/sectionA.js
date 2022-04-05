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
                <img src="images/part1.gif"></img>
            </div>

            <div className="row">
                <div className="audio mt-5">                    
                    <audio controls src="audio/curious_bg.wav">
                        Your browser does not support the <code>audio</code> element.
                    </audio>
                </div>

                <div className="mt-5 col-12 col-lg-6">
                    <div className="text">
                    In a chunk of prime real estate in lower Manhattan, first-generation immigrants, like my grandparents, can live decades in the United States and still know less than thirty words of English. Over time, Chinese immigrants have built, from scratch, a network that has created jobs and services to support other Chinese immigrants. The immigrant network can be an oasis and a bubble, new places traveling by word of mouth and old places being deeply engrained in communal memories. Relying on relationships, Chinatown is a technological desert. Some of the businesses that people frequent fly almost completely off the radar of Google, Yelp, and social media platforms. But as more families leave Chinatown and gentrification continues, the offline network that has sustained generations is changing and shrinking. The coronavirus pandemic has only exacerbated conditions. During the height of the pandemic, social media activism helped support Chinatown businesses through donations and encouragement to order more takeout or buy gift cards. Chinatown is changing rapidly, from both inevitable and preventable causes, but the efforts that many are making through social media and embracing modernity are transforming key small businesses into something more sustainable while struggling to keep their authenticity.
                    </div>
                    <br/>
                    <div className="text">
                    The coronavirus pandemic highlighted a necessity for Chinatown’s small businesses to expand their reach online in an effort to sustain themselves. Over the last two decades, Chinatown has been experiencing a demographic change amidst gentrification. Younger generations and middle-class families are moving both voluntarily and involuntary out into the outer boroughs and suburbs. Most of the residents in Manhattan’s Chinatown today are middle-aged or seniors. Having lived there for years, they are holding on to their old, established ways. But as the population has shifted, the customer base of many restaurants and mom-and-pop stores is shifting rapidly to tourists. However, tourism meant the coronavirus pandemic hit particularly hard. With rising xenophobia and restricted travel, Chinatown saw 50% to 80% less foot traffic during the height of the pandemic. Small businesses had many obstacles against them, for many lacked an online presence and had a language barrier to easily access resources to get started. Most were unable to supplement their in-store profit or easily accept donations themselves. Businesses that applied for government funds struggled to get accepted because part of Chinatown shares a zip code with Tribeca, one of the wealthiest neighborhoods in Manhattan. It seemed that all too quickly, stores in Chinatown were facing shutting down amidst an already severe issue of widespread gentrification.
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
                <Link to="/2"><i class="next-link bi bi-arrow-right-circle"></i></Link>
                </div>
            </div>
        </div>
    );
}

export default SectionA;