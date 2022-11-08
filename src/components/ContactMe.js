import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import './ContactMe.css'

function ContactMe() {
  const handleOnSubmit = e => {
    e.preventDefault();

    const formData = new FormData(e.target);

    fetch(e.target.action, {
      method: 'post',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    }).then((response) => response.json())
    .then(() => console.log("Form successfully submitted"))
    .catch((error) => alert(error));
  }

  return (
    <div className="container_form">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
            <h5 className="card-title">Get in Touch</h5>
            <h5 className="card-title">I will respond asap if a valid email is provided! </h5>
              <h2 className="card-title">Contact Me</h2>
               <div className="contact__options">
                <h5><FontAwesomeIcon icon={ faEnvelope } /> madie86@gmail.com</h5>
               </div>
             {/* <form onSubmit={handleOnSubmit}>  */}
              {/* <form onSubmit={handleOnSubmit} action="https://mailthis.to/madie86@gmail.com" method="POST" encType="multipart/form-data"> */}
              <form name="contact" netlify onSubmit={handleOnSubmit}>

                <div className="mb-3">
                  <label 
                  htmlFor="email" 
                  className="form-label"></label>
                  <input 
                    type="fullname" 
                    name="name" 
                    className="form-control" 
                    id="fullname" 
                    placeholder="Your Full Name"
                    required />
                </div>
                <div className="mb-3">
                  <label 
                  htmlFor="email" className="form-label"></label>
                  <input 
                      type="email"
                      className="form-control" 
                      id="email" 
                      name='_replyto' 
                      placeholder="Your Email"
                      required />
                </div>
                <div className="mb-3">
                  <textarea 
                    type="message"
                    className="form-control" 
                    id="message" 
                    name='message' 
                    placeholder="Your message"
                    />
                </div>
                <input type="hidden" name="_subject" value="Contact form submitted from my portfolio" />
                <input type="hidden" name="_honeypot" value="" />
                <button 
                  className='btn btn-primary'
                  type='submit' >
                    Submit   
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactMe;