import React, { useRef } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_2m4lite', 'template_kfr0kme', form.current, {
        publicKey: 'DvllqdJh4GYXvsETM',
      })
      .then(
        () => {
          e.target.reset();
          alert("E-mail sent")
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section className="contact">
  <span className='contact-title'>Contact <span style={{color: "#DA0037"}}>Me</span></span><br/>
  <span className='contact-data'>Please fill out the form below to discuss any work opportunity</span>
  <form className='contactForm' ref={form} onSubmit={sendEmail}>
    <label htmlFor="user_name">Your Name:</label>
    <input type='text' id='user_name' name="from_name" className='input-field' placeholder='Your Name' required />

    <label htmlFor="user_email">Your E-mail:</label>
    <input type='email' id='user_email' name="from_email" className='input-field' placeholder='Your E-mail' required />

    <label htmlFor="message">Your Message:</label>
    <textarea id='message' name='message' className='input-field' placeholder='Your Message' rows={5} required></textarea>

    <button type='submit' className='submit-btn'>Submit</button>
  </form>
</section>


  )
}
