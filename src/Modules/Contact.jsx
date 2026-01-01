import React from 'react'
import '../Style/Contact.css'

const Contact = () => {
  return (
    <>
      <div className='contback'>
        <div className='contact'>
          <h1>Get in Touch</h1>
          <p>We're here to help! Whether you have questions about our products, need assistance <br /> with an  order, our team is ready to assist you.  Fill out the form below, and <br /> we'll get back to you as soon as possible.</p>
        </div>
        <br /><br />

        <div className="contact-form">
          <form>
            <br />
            <div className="form-group">
              <label className='contlbl'>Name:</label>
              <input type="text" className="form-control" placeholder="Your Name" />
            </div><br />
            <div className="form-group">
              <label className='contlbl'>Email:</label>
              <input type="email" className="form-control" placeholder="Your Email" />
            </div><br />
            <div className="form-group">
              <label className='contlbl'>Message:</label>
              <textarea className="form-control" rows="5" placeholder="Your Message"></textarea>
            </div><br />
            <button className="contsub" type="submit">Send Message</button>
          </form>
        </div>
        <br />
      </div>
    </>
  )
}

export default Contact