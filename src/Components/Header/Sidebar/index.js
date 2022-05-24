import React from 'react';
import { Optionsdata } from '../../data/optionsdata';
import "./sidebar.css"

function Sidebar() {
    
    const data = Optionsdata;
    return (
        
        <div className='header-options'>
            {data.map((option) => {
                return (
                    <a  href={option.link}>
                        {option.icon}{option.title}
                    </a>
                )    
            })}
        </div>
    )
}

export default Sidebar;