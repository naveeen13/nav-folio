import React from 'react'
import { contactdata } from '../../data/contactdata'
import "./contact.css"

export default function Contact() {
    
    const contdata = contactdata;

    return (
        <div className='contact'>
                <a href="https://www.linkedin.com/in/naveen-meena-9933ab21a">
                <div className='contact-site'>
                    <img src={require("../../../assets/linkedin.png")}  className="contact-icon"/>
                </div>
                </a>
                <a href="https://www.instagram.com/naveeen_13/">
                <div className='contact-site'>
                    <img src={require("../../../assets/instagram.png")}  className="contact-icon"/>
                </div>
                </a>
                <a href=" mailto:naveeenmeena13@gmail.com">
                <div className='contact-site'>
                    <img src={require("../../../assets/google.png")}  className="contact-icon"/>
                </div>
                </a>
        </div>
    )
}
