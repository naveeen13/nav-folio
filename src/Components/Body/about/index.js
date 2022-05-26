import React from 'react'
import Contact from '../contact';
import "./about.css";

export default function About(props) {
    

    return (
        <div className='about'>
            <div className='about-up'>
            <div className='about-info'>
            <p className='hi'>Hi,</p> <span className='name'>My name is <span className='lit-name'>Naveen Meena</span></span> , a person who is interested in web development and well anything that has to do anything with coding. This is my portfolio website. Hope you like it.
            </div>
            <div className='about-photo'>
                <img src={require("../../../assets/webber.png")} className="photo"/>
            </div>
            </div>
            <div className='about-bottom'>
            <Contact/>
            </div>
        </div>
    )
}
