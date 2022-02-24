import { Modal } from 'bootstrap';
import { useState } from 'react';
import './portfolio.css';
import P1 from '../../assets/p1.jpg'
import P2 from '../../assets/p2.png'

const Portfolio = () => {

  const portfolioData = [
    {
      id: 1,
      image: P1,
      title: 'Automotive Innovations',
      link: 'https://github.com/aj2967/front-end-assignment',
      demo: 'https://automotive-innovations.netlify.app/index.html',
      modalId: 'exampleModal1',
      modaltitle: ' Automotive Innovations',
      modalText: 'text'
    },
    {
      id: 2,
      image: P2,
      title: 'Lakefront Lodging',
      link: 'http://guthub.com',
      demo: 'http://lakefrontlodging.epizy.com/',
      modalId: 'exampleModal2',
      modaltitle: ' Lakefront Lodging',
      modalText: 'text'
    }
  ]

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
        
        <article className='portfolio-item'>
          <div className="portfolio-item-image">
            <img src={P1} alt='Img' />
          </div>
          <h3>Automotive Innovations</h3>
          <div className="portfolio-item-cta">
            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target='#modal1'>More Info</button>
            <a href='https://automotive-innovations.netlify.app/index.html' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio-item'>
          <div className="portfolio-item-image">
            <img src={P2} alt='Img' />
          </div>
          <h3>Lakefront Lodging</h3>
          <div className="portfolio-item-cta">
            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target='#modal2'>More Info</button>
            <a href='http://lakefrontlodging.epizy.com/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>

      {/* Modal 1*/}
        <div className="modal fade" id="modal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">A website on presenting the latest news on car innovations</h5>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                A responsive front-end developed website that serves as a platform to congregate and deliver engaging news and articles.
              </div>
            </div>
          </div>
        </div>
      
      {/* Modal 2*/}
        <div className="modal fade" id="modal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">A hotel reservation website to allow guests to book rooms</h5>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                Users can sign in and book selected rooms with the information stored into the database for all guests.
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Portfolio