import React from 'react'
import Sidebar from '../Sidebar'
import "./mobile-options.css"

export default function Mobile(props) {
    

    return (
        <div className='mobile-options'>
            <div className='cross-icon' onClick={() => {props.setIsOpen(!props.isOpen)}}>
            <i class="fi-rr-cross-circle "></i>
            </div>
            <div className='mobile-option'>
            <Sidebar/>
            </div>
        </div>
    )
}
