import React from 'react'
import Contact from '../Body/contact';
import "./footer.css"

function Footer(props) {
    

    return (
        <div className='footer'>
            <div className='contact-title'>Contact</div>
            <div className='footer-inner'>
                
                <a download href={require("../../assets/Naveen_Meena_SVNIT.pdf")}><div className='resume'>Download Resume</div></a>
                
                <Contact/> 
            </div>
        </div>
    )
}

export default Footer;
