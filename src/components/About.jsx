import React from 'react'
import './About.css';

function About() {
    return (
        <div className='about'>
            <div className="about-container">
                <div className='about-1'>
                    <p>Hi, I'm Amanda</p>
                </div>
                <div className='about-2'>
                    <p>I develop web apps and websites that are visually interactive.</p>
                </div>
                <div className='about-3'>
                    <p>A Software Developer focusing on front-end engineering, problem-solving and crafting beautiful user interfaces.</p>
                </div>
                <div className="about-4">
                    <button>My work</button>
                </div>
                <div className="about-5">
                    <img width="150" src="https://media.giphy.com/media/jIgXf4hgbHCeKiXpvt/giphy.gif" />
                </div>
            </div>
        </div>
    )
}

export default About