import React from 'react';
import Sidebar from './Sidebar';
import Mobile from './mobile-options';
import Web from './web-options';
import { useState } from 'react';
import "./header.css"

function Header() {
    
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='header'>
            <div className='header-title'>
                <span className='n'>N</span><span className='A'>A</span><span className='v'>V</span>
            </div>
            <div className='header-options-web'>
                <Web/>
            </div>
            <div className='header-options-mobile' onClick={()=>{setIsOpen(!isOpen)}}>
                {!isOpen && <i class="fi fi-rr-grid"></i> }
                
                {isOpen && <Mobile isOpen={isOpen} setIsopen={setIsOpen}/>}
            </div>
        </div>
        
    )
}

export default Header;