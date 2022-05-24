import React from 'react'
import Contact from '../contact';
import "./about.css";

export default function About(props) {
    

    return (
        <div className='about'>
            <div className='about-up'>
            <div className='about-info'>
            Hi, My name is Naveen Meena , something that you might have noticed above in bold and capital. Im interested in web development and anything tha thas to do anyhting with coding. This portfolio is sort of like a resume. Hope you like it . Also check out the other projects that i did below.
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
