import './header.css';
import CTA from './CTA';
import ME from '../../assets/me.svg';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <h5>Hello</h5>
        <h1>Aj Singh</h1>
        <h5 className="text-light">Front End Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="Me" />
        </div>

        <a href="#contact" className='scroll-down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header