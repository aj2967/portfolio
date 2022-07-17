import './footer.css';
import { MdOutlineEmail } from 'react-icons/md'
import { GrLinkedinOption } from 'react-icons/gr'
import {  AiOutlineWhatsApp } from 'react-icons/ai'
import { BsGithub } from 'react-icons/bs'

const Footer = () => {
  return (
		<footer>
			<a href="#" className="footer-logo">
				Aj Singh
			</a>

			<ul className="permalinks">
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#experience">Experience</a>
				</li>
				<li>
					<a href="#services">Services</a>
				</li>
				<li>
					<a href="#portfolio">Portfolio</a>
				</li>
				<li>
					<a href="#testimonials">Testimonials</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</ul>

			<div className="footer-socials">
				<a href="mailto:aj2967@hotmail.com">
					<MdOutlineEmail />
				</a>
				<a href="https://www.linkedin.com/in/aj2967/">
					<GrLinkedinOption />
				</a>
				<a href="https://github.com/aj2967/" target="_blank">
					<BsGithub />
				</a>
			</div>

			<div className="footer-copyright">
				<small>&copy; Aj Singh. All rights reserved.</small>
			</div>
		</footer>
  );
}

export default Footer