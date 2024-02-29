import React from 'react'
import './Introduction.css'
import { Link } from 'react-scroll'
// import home from '../../assets/react_man.png'
const Introduction = () => {
  return (
    <section id ="intro">
        <div className="intro-desc">
            <span>Hello Guys</span>
            <h2>This is Fahim</h2>
            <h1>Expert Web Developer</h1>
            <p>I am working with a passion for creating elegant website by using html,css,javascript,bootstrat,react.</p>
            <Link className='button-73'>Order Me</Link>
        </div>
        <img src="/assets/react_man.png" alt="" className='intro-img'/>
    </section>
  )
}

export default Introduction