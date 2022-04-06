import { Modal } from 'bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactGa from 'react-ga';
import './portfolio.css';
import P1 from '../../assets/p1.jpg'
import P2 from '../../assets/p2.png'
import P3 from '../../assets/p3.png'
import pokedexImg from '../../assets/pokedex-img.jpg';
import pacman from '../../assets/pacman.png'

const Portfolio = () => {

  const handleViews = () => {
    ReactGa.event({
      category: 'Button',
      action: 'Clicked live demo button'
    })
  }

  const portfolioData = [
    {
      id: 1,
      image: P1,
      title: 'Automotive Innovations',
      link: 'https://github.com/aj2967/front-end-assignment',
      demo: 'https://automotive-innovations.netlify.app/index.html',
      modalId: 'examplemodal-automotive-innovations',
      modaltitle: ' Automotive Innovations',
      modalText: 'text'
    },
    {
      id: 2,
      image: P2,
      title: 'Lakefront Lodging',
      link: 'http://guthub.com',
      demo: 'http://lakefrontlodging.epizy.com/',
      modalId: 'examplemodal-lakefront-lodging',
      modaltitle: ' Lakefront Lodging',
      modalText: 'text'
    },
  ]

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">

        <article className='portfolio-item'>
          <div className="portfolio-item-image">
            <img src={pacman} alt='Img' />
          </div>
          <h3>Game Database</h3>
          <div className="portfolio-item-cta">
            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target='#modal-game'>More Info</button>
            <a href='https://aj2967.github.io/games-database/' className='btn btn-primary' target='_blank' onClick={handleViews}>Live Demo</a>
          </div>
        </article>
        <article className='portfolio-item'>
          <div className="portfolio-item-image">
            <img src={pokedexImg} alt='Img' />
          </div>
          <h3>Pokedex</h3>
          <div className="portfolio-item-cta">
            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target='#modal-pokedex'>More Info</button>
            <a href='https://aj2967.github.io/pokemon/' className='btn btn-primary' target='_blank' onClick={handleViews}>Live Demo</a>
          </div>
        </article>
        <article className='portfolio-item'>
          <div className="portfolio-item-image">
            <img src={P1} alt='Img' />
          </div>
          <h3>Automotive Innovations</h3>
          <div className="portfolio-item-cta">
            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target='#modal-automotive-innovations'>More Info</button>
            <a href='https://automotive-innovations.netlify.app/index.html' className='btn btn-primary' target='_blank' onClick={handleViews}>Live Demo</a>
          </div>
        </article>
        <article className='portfolio-item'>
          <div className="portfolio-item-image">
            <img src={P2} alt='Img' />
          </div>
          <h3>Lakefront Lodging</h3>
          <div className="portfolio-item-cta">
            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target='#modal-lakefront-lodging'>More Info</button>
            <a href='http://lakefrontlodging.epizy.com/' className='btn btn-primary' target='_blank' onClick={handleViews}>Live Demo</a>
          </div>
        </article>
        <article className='portfolio-item'>
          <div className="portfolio-item-image">
            <img src={P3} alt='Img' />
          </div>
          <h3>Puffin Group</h3>
          <div className="portfolio-item-cta">
            <Link to='/puffin' className="btn">More Info</Link>
          </div>
        </article>
      </div>

      {/* Modal Game*/}
        <div className="modal fade" id="modal-game" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Details on a huge collection of games</h5>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                Users curious about getting details for a game are able to search using the data provided by RAWG's API and find a variety of information or filter their search for finding something close to their needs.
              </div>
            </div>
          </div>
        </div>
      
      {/* Modal 1*/}
        <div className="modal fade" id="modal-automotive-innovations" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
        <div className="modal fade" id="modal-lakefront-lodging" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
      
      {/* Modal 3*/}
        <div className="modal fade" id="modal-pokedex" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">An index of over 800 pokemons to view from</h5>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                A small project created using React Js and PokeAPI. Users are able to view all pokemons and view the pokemon's individual stats.
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Portfolio