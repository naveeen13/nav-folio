import React from 'react';
import About from './about';
import "./body.css"
import Projects from './projects';
import Seperator from './seperator/seperator';
import Skills from './skills';

function Body(props) {
    

    return (
        <div className='body'>
            <section id='about'>
                <About/>
                <Seperator/>
            </section>
           <section id='projects'>
               <Projects/>
               <Seperator/>
           </section>
           <section id='skills'>
               <Skills/>
               <Seperator/>
           </section>
        </div>
    )
}

export default Body;
