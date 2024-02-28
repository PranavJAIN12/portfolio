import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <section className="contact">
    <span className='contact-title'>Contact <span style={{color: "#DA0037"}}>Me</span></span><br/>
    <span className='contact-data'>Please fill out the form below to discuss any work opportunity</span>
    <form className='contactForm'>
        <label htmlFor="name">Your Name:</label>
        <input type='text' id='name' name='name' className='input-field' placeholder='Your Name' required />

        <label htmlFor="email">Your E-mail:</label>
        <input type='email' id='email' name='email' className='input-field' placeholder='Your E-mail' required />

        <label htmlFor="message">Your Message:</label>
        <textarea id='message' name='message' className='input-field' placeholder='Your Message' rows={5} required></textarea>

        <button type='submit' className='submit-btn'>Submit</button>
    </form>
</section>

  )
}
