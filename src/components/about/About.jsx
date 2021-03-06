import './about.css'
import AboutImg from '../../assets/siteImages/about.svg'
import { GiBasketballBall } from 'react-icons/gi'
// import { IoIosCreate } from "react-icons/io";
import { AiFillCode } from "react-icons/ai";
import { AiOutlineStock } from 'react-icons/ai'

const About = () => {
  return (
		<section id="about">
			<h5>Get To Know</h5>
			<h2>About Me</h2>

			<div className="container about-container">
				<div className="about-me">
					<div className="about-me-image">
						<img src={AboutImg} alt="About Me" />
					</div>
				</div>

				<div className="about-content">
					<p>
						An experienced Web Developer and a BSc (Hons) Computer
						Science graduate, skilled in designing websites to meet
						clients’ needs as well as achieving satisfactory
						outcomes for the organisation. A dedicated individual
						who is self-motivated and resilient towards their work
						responsibilities and has a proven record of successfully
						accomplishing projects for various orgaisations. Possess
						excellent communication and interpersonal skills for
						meeting the designers, developers and project staff for
						progress updates.
					</p>

					<a href="#contact" className="btn btn-primary">
						Get In Touch
					</a>

					<h3 className="text-light">My hobbies include:</h3>

					<div className="about-cards">
						<article className="about-card">
							<GiBasketballBall className="about-icon" />
							<h5>Basketball</h5>
							<small>and playing competitively</small>
						</article>

						<article className="about-card">
							<AiFillCode className="about-icon" />
							<h5>Building</h5>
							<small>and learning to code</small>
						</article>

						<article className="about-card">
							<AiOutlineStock className="about-icon" />
							<h5>Investing</h5>
							<small>and following financial news</small>
						</article>
					</div>
				</div>
			</div>
		</section>
  );
}

export default About