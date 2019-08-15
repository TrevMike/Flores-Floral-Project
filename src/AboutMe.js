import React from 'react';
import Diana from './assets/DainaProfile.jpg'
import './App.css';

function AboutMe() {
    return(
        <div className="aboutMeContainer  deep-orange lighten-4">
            <img src={Diana} alt="blue bonnet flower" className="ProfilePic"/>
           
        </div>
        
    )
}

export default AboutMe