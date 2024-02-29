import React,{useRef} from 'react';

import './Contact.css'
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ojnbf25', 'template_p6gk3d9', form.current, {
        publicKey: 'Hbs0CTSyYe03E5isq',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email sent')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id='contact'>
<span className='contact-title'>Contact me</span>
      <p className="contact-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, neque. Quo, eligendi harum inventore at, nobis deserunt quas expedita eum optio quaerat tenetur illum? Cumque rerum tenetur voluptate tempora eaque!</p>
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        
        <input type="text" className='name'placeholder='Your Name' name='your_name'/>
        <input type="email" className='email'placeholder='Your Email' name='your-email'/>
        <textarea name="message"className='message' placeholder='Your message' cols="30" rows="10"></textarea>
        <button type='submit' className='button-73 btn4'>Submit</button>
        
      </form>
    </section>
  )
}

export default Contact