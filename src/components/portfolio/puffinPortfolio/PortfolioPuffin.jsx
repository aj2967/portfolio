import { useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import "./PortfolioPuffin.css";
import PuffinGroup from "./shared/puffin-group.png";
import PuffinClub from "./shared/puffin-club.png";
import MyPuffin from "./shared/my-puffin.png";

const PortfolioPuffin = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [])

	return (
		<div className="container">
			<div className="portfolio-page-header">
				<Link to="/" className="link-home">
					<IoIosArrowRoundBack className="back-icon" />
					Back
				</Link>
				<h1>Puffin</h1>
			</div>

			<div className="portfolio-page-container">
				<div className="portfolio-page-summary">
					<p>
						This was a project where I was required to
						alongside another graduate to design and create a
						website for the company Future Care’s product, Puffin.
						Puffin is a brand for baby monitoring devices. We
						designed and created the front-end of an e-commerce
						website and began development into the back-end by
						creating a login system. The project entailed developing
						three websites relating to the brand called Puffin
						Group, Puffin Club and My Puffin.
					</p>
				</div>

				<nav className="page-tabs">
					<div className="nav nav-tabs" id="nav-tab" role="tablist">
						<button
							className="nav-link active"
							id="nav-home-tab"
							data-bs-toggle="tab"
							data-bs-target="#nav-home"
							type="button"
							role="tab"
							aria-controls="nav-home"
							aria-selected="true"
						>
							Puffin Group
						</button>
						<button
							className="nav-link"
							id="nav-profile-tab"
							data-bs-toggle="tab"
							data-bs-target="#nav-profile"
							type="button"
							role="tab"
							aria-controls="nav-profile"
							aria-selected="false"
						>
							Puffin Club
						</button>
						<button
							className="nav-link"
							id="nav-contact-tab"
							data-bs-toggle="tab"
							data-bs-target="#nav-contact"
							type="button"
							role="tab"
							aria-controls="nav-contact"
							aria-selected="false"
						>
							My Puffin
						</button>
					</div>
				</nav>

				<div className="tab-content" id="nav-tabContent">
					<div
						className="tab-pane fade show active"
						id="nav-home"
						role="tabpanel"
						aria-labelledby="nav-home-tab"
					>
						<img src={PuffinGroup} alt="Puffin" />
						<h3>Brand Intro and e-Commerce</h3>
						<p>
							Puffin would be a website where the customer is able
							to browse, filter and buy Puffin products. This
							website introduces potential customers to what
							Puffin is about by adding the products and writing
							their mission statement. As well as having a contact
							page where those interested can find out more and
							also has links to redirect you to other Puffin
							websites.
						</p>
					</div>

					<div
						className="tab tab-pane fade"
						id="nav-profile"
						role="tabpanel"
						aria-labelledby="nav-profile-tab"
					>
						<img src={PuffinClub} alt="Puffin" />
						<h3>Up to Date Blogs</h3>
						<p>
							Puffin Club was a blog site that allowed Puffin
							members to keep updated with its newest technologies
							and information.
						</p>
					</div>

					<div
						className="tab-pane fade"
						id="nav-contact"
						role="tabpanel"
						aria-labelledby="nav-contact-tab"
					>
						<img src={MyPuffin} alt="Puffin" />
						<h3>Updates on Baby Health</h3>
						<p>
							My Puffin is the client portal for members. This
							website shows data taken from the device and
							displays it onto the pages which include the patient
							(baby), the parent/guardian details and results
							represented by using graphs and charts in a readable
							and understandable way.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PortfolioPuffin;
