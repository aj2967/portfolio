import { Modal } from 'bootstrap';
import { Link } from 'react-router-dom';
import ReactGa from 'react-ga';
import './portfolio.css';
import automotiveInnovationsCover from '../../assets/p1.jpg'
import lakefrontLodgingCover from '../../assets/p2.png'
import puffinCover from '../../assets/p3.png'
import pokedexCover from '../../assets/pokedex-img.jpg';
import pacmanCover from '../../assets/pacman.png'
import planets3dCover from '../../assets/planets3dCover.png'

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
      image: lakefrontLodgingCover,
      title: 'Lakefront Lodging',
      link: '',
      demo: 'http://lakefrontlodging.epizy.com/',
      buttonId: 'lakefront-lodging',
      modalId: 'lakefront-lodging',
      modaltitle: 'A hotel reservation website to allow guests to book rooms',
      modalText: 'Users can sign in and book selected rooms with the information stored into the database for all guests.'
    },
    {
      id: 2,
      image: automotiveInnovationsCover,
      title: 'Automotive Innovations',
      link: 'https://github.com/aj2967/front-end-assignment',
      demo: 'https://automotive-innovations.netlify.app/index.html',
      buttonId: 'automotive-innovations',
      modalId: 'automotive-innovations',
      modaltitle: 'A website on presenting the latest news on car innovations',
      modalText: 'A responsive front-end developed website that serves as a platform to congregate and deliver engaging news and articles.'
    },
    {
      id: 3,
      image: pokedexCover,
      title: 'Pokedex',
      link: '',
      demo: 'https://aj2967.github.io/pokemon/',
      buttonId: 'pokedex',
      modalId: 'pokedex',
      modaltitle: 'An index of over 800 pokemons to view from',
      modalText: `A small project created using React Js and PokeAPI. Users are able to view all pokemons and view the pokemon's individual stats.`
    },
    {
      id: 4,
      image: pacmanCover,
      title: 'Game Database',
      link: '',
      demo: 'https://aj2967.github.io/games-database/',
      buttonId: 'game-database',
      modalId: 'game-database',
      modaltitle: 'Details on a huge collection of games',
      modalText: `Users curious about getting details for a game are able to search using the data provided by RAWG's API and find a variety of information or filter their search for finding something close to their needs.`
    },
    {
      id: 5,
      image: planets3dCover,
      title: 'Planets 3D',
      link: '',
      demo: 'https://aj2967.github.io/planets-3d/',
      buttonId: 'planets3d',
      modalId: 'planets3d',
      modaltitle: '3D Planets',
      modalText: `This app has been made using ReactJS and React Three Fiber. React Three Fiber is a component based library that builds off ThreeJS for 3D rendering. Providing an area which can be display the current universal planet which have been realistically presented by applying different textures to the mesh. The models can be viewed from any angle. Additionally, the space can be controlled and seen in more detail using the React Three Drei plugin.`
    },
  ]

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
        {/* Portfolio Map */}
        {portfolioData.map(portfolio => (
          <article className='portfolio-item' key={portfolio.id}>
          <div className="portfolio-item-image">
            <img src={portfolio.image} alt='Img' />
          </div>
          <h3>{portfolio.title}</h3>
          <div className="portfolio-item-cta">
            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target={`#${portfolio.buttonId}`}>More Info</button>
            <a href={portfolio.demo} className='btn btn-primary' target='_blank' onClick={handleViews}>Live Demo</a>
          </div>
        </article>
        )).reverse()}

        <article className='portfolio-item'>
          <div className="portfolio-item-image">
            <img src={puffinCover} alt='Img' />
          </div>
          <h3>Puffin Group</h3>
          <div className="portfolio-item-cta">
            <Link to='/puffin' className="btn">More Info</Link>
          </div>
        </article>
      </div>

      {/* Modal Map*/}
        {portfolioData.map(portfolio => (
          <div className="modal fade" id={portfolio.modalId} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" key={portfolio.id}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">{portfolio.modaltitle}</h5>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                {portfolio.modalText}
              </div>
            </div>
          </div>
        </div>
        ))}
    </section>
  )
}

export default Portfolio