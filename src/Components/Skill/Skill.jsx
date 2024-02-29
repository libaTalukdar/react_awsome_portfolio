import React from 'react'
import './Skill.css'

const Skill = () => {
  return (
    <section id='skill'>
      <span className='skill-title'>What is my profession</span>
      <p className="skill-desc">I am a skilled web developer and I make portfolio website,ecommerc website, travel website by using html,css,javascript,react.I like to do this job.</p>
       <div className="skill-boxes">
      <div className="skill-box">
        <img src="/assets/blog-website-min.jpg" alt="" />
        <div className="skill-box-text">
          <h2>Blog Website</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur iste delectus et saepe distinctio harum!</p>
        </div>
        </div>
        <div className="skill-box">
        <img src="/assets/ecommerce.jpg" alt="" />
        <div className="skill-box-text">
          <h2>Ecommerce Website</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis officiis quam sed dicta! Illum, aliquid!</p>
        </div>
        </div>
        <div className="skill-box">
        <img src="/assets/restaurent-website-min (1).jpg" alt="" />
        <div className="skill-box-text">
          <h2>Restaurent Website</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil excepturi consequuntur vitae ducimus magni quo!</p>
        </div>
        </div>
        </div> 
    </section>
  )
}

export default Skill