import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { GrLinkedinOption } from 'react-icons/gr'
import {  AiOutlineWhatsApp } from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pljwpgh', 'template_yc950jp', form.current, 'user_RfnCHU0kgfgAN8AhOud8X')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact</h2>

      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <MdOutlineEmail className='contact-option-icon' />
            <h4>Email</h4>
            <h5>aj2967@hotmail.com</h5>
            <a href="mailto:aj2967@hotmail.com">Write a message</a>
          </article>
          <article className="contact-option">
            <GrLinkedinOption className='contact-option-icon' />
            <h4>LinkedIn</h4>
            <h5>aj2967</h5>
            <a href="https://www.linkedin.com/in/aj2967/" target='_blank'>Message</a>
          </article>
          <article className="contact-option">
            <AiOutlineWhatsApp className='contact-option-icon' />
            <h4>WhatsApp</h4>
            <h5>(+44) 777 019 2737</h5>
            <a href="https://api.whatsapp.com/send?phone=+447770192737" target='_blank'>Chat</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Type Your Message...' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact